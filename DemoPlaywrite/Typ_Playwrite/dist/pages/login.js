"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginPage = void 0;
const test_1 = require("@playwright/test"); // Replace 'playwright-chromium' with your desired browser module
const dotenv_1 = __importDefault(require("dotenv"));
const { webkit } = require('playwright'); // Or 'chromium' or 'firefox'.
require('dotenv').config();
dotenv_1.default.config();
class LoginPage {
    constructor(page) {
        this.usernameInputSelector = "input[id='ctl00_CPHContainer_txtUserLogin']";
        this.passwordInputSelector = "input[id='ctl00_indexLogin2_txtPassword']";
        this.loginButtonSelector = "input[id='ctl00_CPHContainer_btnLoginn']";
        this.warning1 = "Userid or Password did Not Match !!";
        this.forgotpass = "a[id='ctl00_CPHContainer_hprlnkForgetPassword']";
        this.signup = "a[href='SignUp.aspx']:nth-child(1) span";
        this.page = page;
    }
    navigateTo() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.goto("https://www.testyou.in/Login.aspx");
        });
    }
    enterCredentials() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.type(this.usernameInputSelector, "username");
            yield this.page.type(this.passwordInputSelector, "password");
        });
    }
    clickLoginButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.loginButtonSelector);
        });
    }
    verifyWarning() {
        return __awaiter(this, void 0, void 0, function* () {
            const text = yield this.page.$(this.warning1);
            const Warningtext = yield (text === null || text === void 0 ? void 0 : text.textContent());
            yield (0, test_1.expect)(Warningtext === null || Warningtext === void 0 ? void 0 : Warningtext.toString()).toBe('Userid or Password did Not Match \!\!');
        });
    }
    clickForgotButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.forgotpass);
        });
    }
    validateForgotPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield this.page.url();
            yield (0, test_1.expect)(url).toBe("https://www.testyou.in/ForgetPassword.aspx");
        });
    }
    clickSignupButton() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.page.click(this.signup);
        });
    }
    validateSignupPage() {
        return __awaiter(this, void 0, void 0, function* () {
            const url = yield this.page.url();
            yield (0, test_1.expect)(url).toBe("https://www.testyou.in/SignUp.aspx");
        });
    }
}
exports.LoginPage = LoginPage;
