import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_KEY,
    }),
    UserModule,
  ],
  providers: [AuthService, JwtStrategy],
  exports: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
