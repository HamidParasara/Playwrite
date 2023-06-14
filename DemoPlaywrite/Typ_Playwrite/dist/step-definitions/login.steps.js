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
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const login_1 = require("../pages/login");
const { webkit } = require('playwright'); // Or 'chromium' or 'firefox'.
require('dotenv').config();
let loginPage;
let page;
// const loginPage = new LoginPage();
(0, cucumber_1.Given)('I am on the login page', { timeout: 200 * 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield webkit.launch();
    const context = yield browser.newContext();
    const page = yield context.newPage();
    loginPage = new login_1.LoginPage(page);
    yield loginPage.navigateTo();
}));
(0, cucumber_1.When)('I enter my credentials', { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.enterCredentials();
}));
(0, cucumber_1.When)('I click on the login button', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.clickLoginButton();
}));
(0, cucumber_1.Then)('The warning message', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.verifyWarning();
}));
(0, cucumber_1.When)('I click Forgot password', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.clickForgotButton();
}));
(0, cucumber_1.Then)('I validate forgot password Page open', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.validateForgotPage();
}));
(0, cucumber_1.When)('I click Sign Up', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.clickSignupButton();
}));
(0, cucumber_1.Then)('I validate Sign Up Page open', () => __awaiter(void 0, void 0, void 0, function* () {
    yield loginPage.validateSignupPage();
}));
