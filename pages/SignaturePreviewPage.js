import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class SignaturePreviewPage extends BasePage {
    constructor(page) {
        super(page);

        //Selector
        this.previewArea = '.ws-tpl';
        this.previewAreaUrl = '[style="padding-right: 8px; width: 100%; line-height: normal;"]';
        this.newSignature = '[class="signature-box-title-text"]';
    }

    async validateDetailsInPreview(...expectedValues) {
        for (const value of expectedValues) {
            await this.expectToContainText(this.previewArea, value);
        }
    }

    async validateDetailsInPreviewUrl(...expectedValues) {
        for (const value of expectedValues) {
            await this.expectToContainText(this.previewAreaUrl, value);
        }
    }

    async sigNameValidation(expectedName) {
        const name = await this.page.locator(this.newSignature).textContent();
        expect(name.trim()).toContain(expectedName);
    }
}