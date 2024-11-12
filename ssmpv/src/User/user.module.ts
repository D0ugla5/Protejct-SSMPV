import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { JwtModule } from '@nestjs/jwt';
import { UserService } from './user.service';
import { UsersSchema } from './Schemas/user.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Users', schema: UsersSchema }]),
    JwtModule.register({
      secret: 'your-secret-key', // Coloque a chave secreta usada para gerar os tokens
      signOptions: { expiresIn: '1h' }, // Opções para expiração do token
    }),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UsersModule {}
