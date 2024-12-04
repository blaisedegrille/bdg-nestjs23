import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepositroy: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepositroy.create(createUserDto);
    return this.userRepositroy.save(newUser);
  }

  findAll() {
    return this.userRepositroy.find();
  }

  findOne(id: number) {
    const opt: FindOneOptions<User> = {
      where: [{ id: id }],
    };
    return this.userRepositroy.findOne(opt);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    user.name = updateUserDto.name;
    user.email = updateUserDto.email;
    return this.userRepositroy.save(user);
  }

  async remove(id: number) {
    const user = await this.findOne(id);
    // this.userRepositroy.delete(id); // más type
    return this.userRepositroy.remove(user);
  }
}
