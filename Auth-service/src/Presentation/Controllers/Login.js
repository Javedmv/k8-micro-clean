"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginController = void 0;
const generateToken_1 = __importDefault(require("../../Utilities/JWT/generateToken"));
const loginController = (dependencies) => {
    const { useCases: { loginUserUseCase } } = dependencies;
    return async (req, res, next) => {
        try {
            const userCredentials = req.body;
            const { email, password } = req.body;
            if (!email || !password) {
                res.status(400).json({ success: false, message: "Email and password are required" });
                return;
            }
            const user = await loginUserUseCase(dependencies).execute(userCredentials);
            if (user) {
                const userId = user._id?.toString() ?? "";
                const token = (0, generateToken_1.default)({
                    userId: userId,
                    userEmail: user.email,
                    isBlocked: user.isBlocked
                });
                res.cookie("auth", token, {
                    maxAge: 1000 * 60 * 60 * 24,
                    httpOnly: true
                });
                res.status(200).json({ success: true, data: user, message: "Login successful" });
            }
            else {
                res.status(401).json({ success: false, message: "Invalid email or password" });
            }
        }
        catch (error) {
            next(error);
        }
    };
};
exports.loginController = loginController;
