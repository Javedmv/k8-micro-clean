"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const Login_1 = require("./Login");
const Signup_1 = require("./Signup");
const controllers = (dependencies) => {
    return {
        signup: (0, Signup_1.signupController)(dependencies),
        login: (0, Login_1.loginController)(dependencies),
    };
};
exports.controllers = controllers;
