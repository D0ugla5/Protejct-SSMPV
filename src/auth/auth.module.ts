import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../User/user.service';
import { UsersModule } from '../User/user.module';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'secretKey', // Use uma chave secreta segura e armazene-a em variáveis de ambiente
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [UserService, JwtStrategy],
  exports: [UserService],
})
export class AuthModule {}
