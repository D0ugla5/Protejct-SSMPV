import { IsString, IsBoolean, IsOptional, IsNotEmpty, IsEmail } from 'class-validator';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsBoolean()
  @IsOptional() // Campo adm é opcional
  adm?: boolean;
}
