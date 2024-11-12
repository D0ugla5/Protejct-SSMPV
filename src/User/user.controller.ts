import { Controller, Get, Post, Body } from '@nestjs/common';
import { Users } from './Schemas/user.schema';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('User')
export class UserController {
  constructor(private UsersService: UserService) {}

  @Post()
  async create(@Body() UsersDto: UserDto) {
    this.UsersService.create(UsersDto);
  }

  @Get()
  async findAll(): Promise<Users[]> {
    return this.UsersService.findAll();
  }
}
