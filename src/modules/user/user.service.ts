import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async login(email: string, password: string): Promise<User> {
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user) {
      throw new NotFoundException('User not found');
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid password');
    }

    return passwordMatch;
  }

  async createUser(user: User): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email },
    });
    if (existingUser) {
      throw new Error('Cet e-mail est déjà utilisé.');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: hashedPassword,
    };

    const createdUser = await this.userRepository.save(newUser);
    return createdUser;
  }

  async getUserById(id: number): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { id } });
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
