import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './User/user.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Douglas:87@cluster0.wq7pd5r.mongodb.net/'),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
