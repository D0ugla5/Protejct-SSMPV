import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { Model } from 'mongoose';
import { Users, UsersDocument } from './Schemas/user.schema';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UserService {
  constructor(@InjectModel(Users.name) private userModel: Model<UsersDocument>) {}

  async create(userDto: UserDto): Promise<Users> {
    const newUser = new this.userModel(userDto);
    return newUser.save();
  }

  async findAll(): Promise<Users[]> {
    return this.userModel.find().exec();
  }

  async findOneByEmail(email: string): Promise<Users> {
    return this.userModel.findOne({ email }).exec();
  }  

  async update(id: string, userDto: UserDto): Promise<Users> {
    return this.userModel.findByIdAndUpdate(id, userDto, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.userModel.findByIdAndUpdate(id).exec();
  }
}
