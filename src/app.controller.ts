import { Controller, Get, Post } from '@nestjs/common';
import { AppService, ImageService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly imageService: ImageService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/card')
  card(): Promise<any> {
    return this.imageService.upload();
  }

  // 卡片页面
  @Get('/card')
  getCardPage(): string {
    return `
      <style>
        .container {
          width: 414px;
          height: 565px;
          background: url('./images/card_bg/redeem.png');
          background-position: center;
          position: absolute;
          top: 0;
          left: 0;
        }
      </style>
      <div class="container">
      
      </div>
    `;
  }
}
