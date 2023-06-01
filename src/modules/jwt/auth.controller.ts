import {
  Controller,
  Get,
  Post,
  Request,
  Body,
  UseGuards,
} from '@nestjs/common';

import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  async me(@Request() req: any) {
    console.log(req);
    return req.user;
  }

  @Post('login')
  login(
    @Body('email') email: string,
    @Body('password') password: string,
  ): Promise<{ accessToken: string }> {
    return this.authService.login(email, password);
  }
}
