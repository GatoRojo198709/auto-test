import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class MySignaturesPage extends BasePage {
    constructor(page) {
        super(page);

        //Selectors
        this.signaturesLink = '[aid="SIGNATURES_NAVIGATION_ITEM"]';
        this.editBtn = '[class="signature-box-edit-btn"]';
        this.actionsLink = '#editor_header_action_btn';
        this.renameLink = '.editor-header-action-icon-rename';
        this.renameInput = '[class="one-sig-rename-input"]';
        this.confirmRenameBtn = '[class="one-sig-rename-btn one-sig-rename-btn-rename"]';
        this.greenNotification = '[class="ws-notification-text"]';
        this.editSignature = '[aid="ws_button"]';
    }

    async navigateToSignatures() {
        await this.click(this.signaturesLink);
    }

    async navigateToEditor() {
        await this.page.waitForSelector(this.editBtn, { state: 'visible' });
        await this.click(this.editBtn);
    }

    async RenameSignature(newName) {
        await this.click(this.actionsLink);
        await this.click(this.renameLink);
        await this.page.fill(this.renameInput, newName);
        await this.click(this.confirmRenameBtn);
        await this.page.waitForTimeout(3000); 
        await expect(this.page.locator(this.greenNotification)).toBeVisible();
        await this.click(this.editSignature);
    }
    
}