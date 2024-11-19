import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './module/user/user.module';
import { AuthModule } from './module/user/auth/auth.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://Douglas:87@cluster0.wq7pd5r.mongodb.net/'),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
