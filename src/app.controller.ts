import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthCredentialsDto } from './authCredentials.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   // return this.appService.getHello();
  // }

  @Get('/signup')
  async signup(authCrendetialsDto: AuthCredentialsDto) {
    return await this.appService.signup(authCrendetialsDto);
  }
}
