import { Controller, Post, Body, UseGuards, Request } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { UserDto } from '../user/dto/user.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  async register(@Body() userDto: UserDto) {
    return this.userService.create(userDto);
  }

  @Post('login')
  async login(@Body() { email, password }: { email: string; password: string }) {
    const user = await this.userService.validateUser(email, password);
    if (!user) {
      return { message: 'Invalid credentials' };
    }
    return this.userService.login(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('profile')
  async getProfile(@Request() req) {
    return req.user;
  }
}
