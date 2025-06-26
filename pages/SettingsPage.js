import { BasePage } from './BasePage';

export class SettingsPage extends BasePage {
    constructor(page) {
        super(page);

        //Selector
        this.userBtn = page.locator('[aid="header.button.profile_menu"]');
        this.profileBtn = page.locator('[aid="header.profile_menu.settings.button.change_email"]');
        this.dltAccountBtn = page.locator('.delete-account-text');
        this.otherRadioBtn = page.locator('[class="radio-btn"]').nth(6);
        this.tellUsMoreInput = page.locator('.ws-input.ws-input-v2 input').nth(6);
        this.deleteBtn = page.locator('.ws-btn-alert');
        this.checkboxConfirm = page.locator('.checkbox');
        this.deleteAccountBtn = page.locator('[aid="ws_button"]').nth(1);
        this.gotItBtn = page.locator('[class="ws-btn ws-btn-shape-default ws-btn-size-default"]');
    }

    async navigateToUserSettings() {
        await this.userBtn.click(); 
        await this.profileBtn.click();
    }

    async deleteAccount() {
        await this.dltAccountBtn.click();
        await this.otherRadioBtn.click();
        await this.tellUsMoreInput.click();
        await this.tellUsMoreInput.fill('Test delete account');
        await this.deleteBtn.click();
        await this.checkboxConfirm.click();
        await this.deleteAccountBtn.click();
        await this.gotItBtn.click();
    }
}