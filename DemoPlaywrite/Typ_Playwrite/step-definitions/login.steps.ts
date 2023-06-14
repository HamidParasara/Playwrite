import { Given, When, Then } from '@cucumber/cucumber';
import { LoginPage } from '../pages/login';
import {Page} from "@playwright/test";
const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.

require('dotenv').config();

let loginPage:LoginPage;
let page:Page
// const loginPage = new LoginPage();

Given('I am on the login page',{timeout: 200 * 5000}, async () => {
  const browser = await webkit.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  loginPage =new LoginPage(page)
  await loginPage.navigateTo();
});

When('I enter my credentials', {timeout: 10000},async () => {
  await loginPage.enterCredentials();
});

When('I click on the login button', async () => {
  await loginPage.clickLoginButton();
});

Then('The warning message', async () => {
  await loginPage.verifyWarning();
});

When('I click Forgot password', async () => {
  await loginPage.clickForgotButton();
});

Then('I validate forgot password Page open',async () => {
  await loginPage.validateForgotPage();
})


When('I click Sign Up', async () => {
  await loginPage.clickSignupButton();
});

Then('I validate Sign Up Page open',async () => {
  await loginPage.validateSignupPage();
})

