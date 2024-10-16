"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
const bcryptjs_1 = require("bcryptjs");
const hashPassword = async (password) => {
    if (!password || typeof password !== "string") {
        throw new Error("Invalid password input");
    }
    try {
        const salt = await (0, bcryptjs_1.genSalt)(10);
        const hashedPassword = await (0, bcryptjs_1.hash)(password, salt);
        return hashedPassword;
    }
    catch (error) {
        console.error("Error hashing password:", error);
        throw new Error("Failed to hash password");
    }
};
exports.hashPassword = hashPassword;
