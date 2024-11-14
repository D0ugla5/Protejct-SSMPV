import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { Users } from './Schemas/user.schema';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userDto: UserDto): Promise<Users> {
    return this.userService.create(userDto);
  }

  @Get()
  async findAll(): Promise<Users[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOneByEmail(@Param('id') id: string): Promise<Users> {
    return this.userService.findOneByEmail(id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() userDto: UserDto): Promise<Users> {
    return this.userService.updateUser(id, userDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<any> {
    return this.userService.deleteUser(id);
  }
}
