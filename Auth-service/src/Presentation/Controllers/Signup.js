"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupController = void 0;
const hashPassword_1 = require("../../Utilities/bcrypt/hashPassword");
const generateToken_1 = __importDefault(require("../../Utilities/JWT/generateToken"));
const userCreatedProducers_1 = require("../../Infrastructure/Kafka/Producers/userCreatedProducers");
const signupController = (dependencies) => {
    const { useCases: { signupUserUseCase, findUserByEmailUseCase }, } = dependencies;
    return async (req, res, next) => {
        try {
            const credentials = req.body;
            console.log(credentials);
            if (!credentials.username || !credentials.username.trim()) {
                res
                    .status(400)
                    .json({ success: false, message: "Username cannot be empty" });
                return;
            }
            if (!credentials.email || !credentials.password) {
                res
                    .status(400)
                    .json({ success: false, message: "Email and password are required" });
                return;
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(credentials.email)) {
                res
                    .status(400)
                    .json({ success: false, message: "Invalid email format" });
                return;
            }
            if (credentials.password.length < 6) {
                res.status(400).json({
                    success: false,
                    message: "Password must be at least 6 characters long",
                });
                return;
            }
            console.log("Searching for user with email:", credentials.email);
            try {
                const existingUser = await findUserByEmailUseCase(dependencies).execute(credentials.email);
                console.log("Existing user:", existingUser);
                if (existingUser) {
                    res
                        .status(400)
                        .json({ success: false, message: "Email already exists" });
                    return;
                }
            }
            catch (error) {
                console.error("Error finding user by email:", error);
            }
            const hashedPassword = await (0, hashPassword_1.hashPassword)(credentials.password);
            if (!hashedPassword) {
                res
                    .status(500)
                    .json({ success: false, message: "Failed to hash password" });
                return;
            }
            credentials.password = hashedPassword;
            const user = await signupUserUseCase(dependencies).execute(req.body);
            if (user) {
                const userId = user._id?.toString() ?? "";
                const token = (0, generateToken_1.default)({
                    userId: userId,
                    userEmail: user.email,
                    isBlocked: user.isBlocked,
                });
                res.cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true,
                });
                res
                    .status(201)
                    .json({ success: true, data: user, message: "User Created" });
                const addedUser = {
                    _id: user._id,
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    role: user.role,
                    isBlocked: user.isBlocked,
                };
                if (addedUser) {
                    (0, userCreatedProducers_1.userCreatedProducer)(addedUser);
                }
            }
            else {
                res.status(404).json({ success: false, message: "User not found" });
            }
        }
        catch (error) {
            next(error);
        }
    };
};
exports.signupController = signupController;
