import { BasePage } from './BasePage';

export class DetailsPage extends BasePage {
    constructor(page) {
        super(page);
        this.url = 'https://webapp.qa5.wisestamp-dev.com/editor';

        //Selectors
        this.nameInput = '#details__name';
        this.titleInput = '#details__title';
        this.companyInput = '#details__company';
        this.phoneInput = '#details__phone';
        this.mobileInput = '#details__mobile';
        this.websiteInput = '#details__website';
        this.emailInput = '#details__email';
        this.addressInput = '#details__address';
        this.appsTab = '.webapp-icon-widgets';
        this.videoLink = '#addons-tooltip-cat-pro-app-notice0_5';
    }

    async fillSmartField(selector, value) {
        // Click the field
        await this.click(selector);

        // Click the dropdown button
        const dropdownIcon = this.page.locator('[class="value-label full-width"]').nth(0);
        await dropdownIcon.click();

        // Choose 'Free text'
        const freeTextOption = this.page.locator('[aid="popover.dropdown.macro.source.freetext"]');
        await freeTextOption.click();

        // Fill the field
        const textInput = this.page.locator('[aid="popover.input.macro.freetext.value"]');
        await textInput.waitFor({ state: 'visible' });
        await textInput.fill(value);

        // Close dropdown
        await this.page.mouse.click(10, 10);
    }

    async enterDetails(name, title, company, phone, mobile, website, email, address) {
        await this.fillSmartField(this.nameInput, name);
        await this.fillSmartField(this.titleInput, title);
        await this.fillSmartField(this.companyInput, company);
        await this.fillSmartField(this.phoneInput, phone);
        await this.fillSmartField(this.mobileInput, mobile);
        await this.fillSmartField(this.websiteInput, website);
        await this.fillSmartField(this.emailInput, email);
        await this.fillSmartField(this.addressInput, address);
    }

    async navigateToApps() {
        await this.page.waitForSelector('.webapp-icon-widgets', { state: 'visible' });
        await this.click(this.appsTab);
    }

    async navigateVideo() {
        await this.click(this.videoLink);
    }
}