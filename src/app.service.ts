import { Injectable } from '@nestjs/common';
import { launch } from 'puppeteer';
import { join } from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

export class ImageService {
  // upload image
  async upload(): Promise<any> {
    const browser = await launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/card');
    await page.setViewport({
      width: 414,
      height: 565,
    });
    await page.screenshot({path: join(__dirname, '../static/images/cards/new_card.png')});
  
    await browser.close();

    return 'http://localhost:3000/images/cards/new_card.png';
  }

  // generate image
  generateImage(): object {
    return {};
  }
}
