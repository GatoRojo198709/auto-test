import { BasePage } from './BasePage';

export class LoginPage extends BasePage {
    constructor(page) {
        super(page);
        this.url = 'https://webapp.qa5.wisestamp-dev.com/editor';

        //Login Selectors
        this.loginBtn = '[aid="header.button.login"]';
        this.emailInput = '#login_email_input';
        this.passwordInput = '#login_password_input';
        this.continueBtn = 'button[type="submit"]';
    }

    async navigateToLogin() {
        await this.click(this.loginBtn);
    }
    async login(email, password) {
        await this.fill(this.emailInput, email);
        await this.fill(this.passwordInput, password);
        await this.click(this.continueBtn);
    }
    }