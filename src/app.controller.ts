import {
  Controller,
  Get,
} from '@nestjs/common';

@Controller()
export class AppController {
  constructor(
  ) {}

  @Get('/hello')
  getHello() {
    return 'Hello World!';
  }
}
