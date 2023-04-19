import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { AuthCredentialsDto } from './authCredentials.dto';

@Injectable()
export class AppService {
  constructor(@Inject('AUTH_SERVICE') private authClient: ClientProxy) {}

  async signup(authCrendetialsDto: AuthCredentialsDto) {
    return await this.authClient.send({ cmd: 'signUp' }, authCrendetialsDto);
  }

  async signin(authCrendetialsDto: AuthCredentialsDto) {
    return await this.authClient.send({ cmd: 'signIn' }, authCrendetialsDto);
  }
}
