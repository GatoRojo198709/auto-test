import { BasePage } from './BasePage';

export class AppsPage extends BasePage {
    constructor(page) {
        super(page);

        //Selector
        this.videoUrlInput = 'input[name="video_url"]';
        this.videoTitleInput = 'input[name="user_title"]';
        this.fontColor = '[style="background-color: rgb(255, 96, 9);"]';
        this.fontSizeSlider = '[class="vue-slider-dot-handle"]';
    }

    async VideoAppActions (videoURL, videoTitle) {
        // Fill the playlist URL
        await this.fill(this.videoUrlInput, videoURL);

        // Fill the playlist title
        await this.fill(this.videoTitleInput, videoTitle);

        // Select orange font color
        await this.click(this.fontColor)

        // Increase font size using slider
        const slider = this.page.locator(this.fontSizeSlider);
        await slider.evaluate(slider => slider.value = 100);
        await slider.dispatchEvent('input');
    }
}