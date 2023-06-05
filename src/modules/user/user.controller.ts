import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Request,
  UseGuards,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../models/user.entity';
import { AuthGuard } from '@nestjs/passport';
import { UserDTO } from 'src/interfaces/user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get('me')
  @UseGuards(AuthGuard('jwt'))
  getUser(@Request() req: any): Promise<User | undefined> {
    const loggedInUser = req.user;
    return this.userService.getUserById(loggedInUser.id);
  }

  @Put('me')
  @UseGuards(AuthGuard('jwt'))
  updateUser(@Request() req: any, @Body() user: UserDTO): Promise<User> {
    const loggedInUser = req.user;
    return this.userService.updateUser(user, loggedInUser);
  }

  @Delete('me')
  @UseGuards(AuthGuard('jwt'))
  deleteUser(@Request() req: any): Promise<void> {
    const loggedInUser = req.user;
    return this.userService.deleteUser(loggedInUser.id);
  }
}
