import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthCredentialsDto } from './authCredentials.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/signup')
  async signup(@Body() authCrendetialsDto: AuthCredentialsDto) {
    return await this.appService.signup(authCrendetialsDto);
  }

  @Post('/signin')
  async signin(@Body() authCrendetialsDto: AuthCredentialsDto) {
    return await this.appService.signin(authCrendetialsDto);
  }
}
