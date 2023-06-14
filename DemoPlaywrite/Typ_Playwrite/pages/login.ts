import { Page, expect } from '@playwright/test'; // Replace 'playwright-chromium' with your desired browser module
import dotenv from 'dotenv';
const { webkit } = require('playwright');  // Or 'chromium' or 'firefox'.
require('dotenv').config();

dotenv.config();

export class LoginPage {
  private page: Page;
  private usernameInputSelector = "input[id='ctl00_CPHContainer_txtUserLogin']";
  private passwordInputSelector = "input[id='ctl00_indexLogin2_txtPassword']";
  private loginButtonSelector = "input[id='ctl00_CPHContainer_btnLoginn']";
  private warning1 = "Userid or Password did Not Match !!";
  private forgotpass = "a[id='ctl00_CPHContainer_hprlnkForgetPassword']";
  private signup = "a[href='SignUp.aspx']:nth-child(1) span";


  constructor(page:Page) {
    this.page = page
  }
  
  async navigateTo() {
    await this.page.goto("https://www.testyou.in/Login.aspx");
  }
  
  async enterCredentials() {
    await this.page.type(this.usernameInputSelector, "username");
    await this.page.type(this.passwordInputSelector, "password");
  }
  
  async clickLoginButton() {
    await this.page.click(this.loginButtonSelector);
  }
  
  async verifyWarning() {
    const text = await this.page.$(this.warning1);
    const Warningtext = await text?.textContent();
    await expect(Warningtext?.toString()).toBe('Userid or Password did Not Match \!\!');

  }
  async clickForgotButton() {
    await this.page.click(this.forgotpass);
  }

  async validateForgotPage() {
    const url = await this.page.url();
    await expect(url).toBe("https://www.testyou.in/ForgetPassword.aspx");
  }

  async clickSignupButton() {
    await this.page.click(this.signup);
  }

  async validateSignupPage() {
    const url = await this.page.url();
    await expect(url).toBe("https://www.testyou.in/SignUp.aspx");
  }
}
