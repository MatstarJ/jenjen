import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './uesrs/user.CreateUserDto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //C
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }

  //R
  @Get('/id/:id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.userService.findOne(id);
  }

  //R
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  //U
  // @Patch('/change')
  // change(@Body() createUserDto: CreateUserDto, id: string) {
  //   return this.userService.change(createUserDto, id);
  // }

  @Patch('/change')
  change(
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
    @Body('id') id: string,
  ) {
    return this.userService.change(firstName, lastName, id);
  }

  // @Patch('/change/:id')
  // change(@Body() createUserDto: CreateUserDto, @Param('id') id: string) {
  //   return this.userService.change(createUserDto, id);
  // }

  //D
  @Delete()
  remove(@Body('id') id: string) {
    return this.userService.remove(id);
  }
}
