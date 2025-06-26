import { BasePage } from './BasePage';

export class SignUpPage extends BasePage {
    constructor(page) {
        super(page);
        this.page = page;
        this.url = 'https://webapp.qa10.wisestamp-dev.com/editor';

        // Sign up Locators
        this.loginBtn = page.locator('[aid="header.button.login"]');
        this.creatAccountBtn = page.locator('[aid="modal.signin.button.signup"]');
        this.emailField = page.locator('#signup_email_input');
        this.nameField = page.locator('#signup_name_input');
        this.passwordField = page.locator('#signup_password_input');
        this.signUpBtn = page.locator('.btn.signup-popup-button');
    }

    async navigateToSignUp() {
        await this.loginBtn.click();
        await this.creatAccountBtn.waitFor({ state: 'visible', timeout: 5000 });
        await this.creatAccountBtn.click();
    }

    async signUp(email, name, password) {
        await this.emailField.waitFor({ state: 'visible', timeout: 5000 });
        await this.fillSmartField(this.emailField, email);
        await this.fillSmartField(this.nameField, name);
        await this.fillSmartField(this.passwordField, password);
        await this.signUpBtn.click();

        await this.page.waitForTimeout(3000);
    }
}
