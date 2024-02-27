import { expect, Locator, Page } from '@playwright/test';

export default class SignInPage {

  constructor(private page: Page) {
    this.page = page;
  }

  async navigateToSignInPage(url: string = '/') {
    const signInBtn: Locator = this.page.locator('a[aria-label="Sign in"][target="_top"]');

    await this.page.goto(url);
    await signInBtn.click();
  }

  async completeSignInForm(email: string, password: string) {
    const emailField: Locator = this.page.locator('#identifierId');
    const passwordField: Locator = this.page.locator('input[type="password"]');
    const nextBtn: Locator = this.page.locator('xpath=//span[contains(text(),"Next")]');
    
    await emailField.fill(email);
    await nextBtn.click();
    await passwordField.fill(password);
    await nextBtn.click();
  }

  async verifyWrongPasswordError() {
    const error: Locator = this.page.locator('xpath=//span[contains(text(),"Wrong password)]');

    expect(await error.textContent()).toContain('Wrong password. Try again or click Forgot password to reset it.');
  }

}
