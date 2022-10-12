import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './uesrs/user.entity';
import { CreateUserDto } from './uesrs/user.CreateUserDto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  //C
  async create(createUserDto: CreateUserDto): Promise<User> {
    const { firstName, lastName } = createUserDto;
    const user = this.usersRepository.create({
      firstName,
      lastName,
    });
    return await this.usersRepository.save(user);
  }

  //R
  findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  //R
  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  //U
  // async change(createUserDto: CreateUserDto, id: string): Promise<User> {
  //   console.log(id);
  //   const user = await this.usersRepository.findOneBy({ id });
  //   user.firstName = createUserDto.firstName;
  //   user.lastName = createUserDto.lastName;
  //   return await this.usersRepository.save(user);
  // }

  async change(firstName: string, lastName: string, id: string): Promise<User> {
    console.log(id);
    console.log(firstName);
    console.log(lastName);
    const user = await this.usersRepository.findOneBy({ id });
    user.firstName = firstName;
    user.lastName = lastName;
    return await this.usersRepository.save(user);
  }

  async remove(id: string): Promise<void> {
    console.log(id);
    await this.usersRepository.delete(id);
  }
}
