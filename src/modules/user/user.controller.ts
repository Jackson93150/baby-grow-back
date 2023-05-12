import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../../models/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  createUser(@Body() user: User): Promise<User> {
    return this.userService.createUser(user);
  }

  @Get(':id')
  getUserById(@Param('id') id: number): Promise<User | undefined> {
    return this.userService.getUserById(id);
  }

  @Put(':id')
  updateUser(@Param('id') id: number, @Body() user: User): Promise<User> {
    user.id = id;
    return this.userService.updateUser(user);
  }

  @Delete(':id')
  deleteUser(@Param('id') id: number): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
