import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../models/user.entity';
import * as bcrypt from 'bcrypt';
import { UserDTO } from 'src/interfaces/user.dto';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async createUser(user: User): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: user.email },
    });
    if (existingUser) {
      throw new Error('Cet e-mail est déjà utilisé.');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user.email)) {
      throw new Error("L'e-mail doit être au format valide.");
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

  async updateUser(user: UserDTO, me: User): Promise<User> {
    const updateUser = {
      id: me.id,
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      password: me.password,
      registration_date: me.registration_date,
    };
    return this.userRepository.save(updateUser);
  }

  async deleteUser(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}
