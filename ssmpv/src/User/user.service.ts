import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDto } from './dto/user.dto';
import { Users, UsersDocument } from './Schemas/user.schema';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(Users.name) private userModel: Model<UsersDocument>,
    private jwtService: JwtService,
  ) {}

  async create(userDto: UserDto): Promise<Users> {
    const hashedPassword = await bcrypt.hash(userDto.password, 10);
    const newUser = new this.userModel({ ...userDto, password: hashedPassword });
    return newUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<Users | undefined> {
    return this.userModel.findOne({ email }).exec();
  }

  async validateUser(email: string, password: string): Promise<Users | null> {
    const user = await this.findOneByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    return null;
  }

  async login(user: Users): Promise<{ accessToken: string }> {
    const payload = { email: user.email};
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async updateUser(userId: string, updateData: Partial<UserDto>): Promise<Users> {
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }
    return this.userModel.findByIdAndUpdate(userId, updateData, { new: true }).exec();
  }

  async deleteUser(userId: string): Promise<any> {
    return this.userModel.findByIdAndDelete(userId).exec();
  }
}
