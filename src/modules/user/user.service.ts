import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { User } from '../../models/user.entity';

@Injectable()
export class UserService {
  private userRepository = getRepository(User);

  async createUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne(id);
  }

  async getUserByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }

  async updateUser(user: User): Promise<User> {
    return this.userRepository.save(user);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
