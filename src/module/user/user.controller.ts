import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards, Logger } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { Users } from './Schemas/user.schema';
import { RolesGuard } from './guards/roles.guards';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);

  constructor(private readonly userService: UserService) {}

  @Post()
  async create(@Body() userDto: UserDto): Promise<Users> {
    this.logger.log('Creating a new user');
    return this.userService.create(userDto);
  }

  @Get()
  async findAll(): Promise<Users[]> {
    this.logger.log('Finding all users');
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('email') email: string): Promise<Users> {
    this.logger.log(`Finding user with id: ${email}`);
    return this.userService.findOneByEmail(email);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() userDto: UserDto): Promise<Users> {
    this.logger.log(`Updating user with id: ${id}`);
    return this.userService.update(id, userDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<any> {
    this.logger.log(`Removing user with id: ${id}`);
    return this.userService.remove(id);
  }

  // Endpoint específico para administradores
  @UseGuards(RolesGuard)
  @Get('admin/secret')
  async adminSecret(): Promise<string> {
    return 'This is a secret admin endpoint';
  }
}
