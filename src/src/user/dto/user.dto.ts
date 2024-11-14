
import { 
    IsString,
    IsEmail,
    IsStrongPassword,
    IsNotEmpty,
    IsDateString
} from "class-validator";



export class UserDto{
    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsDateString()
    birthday:string;
    
    @IsNotEmpty()
    @IsEmail()
    email:string;
    
    @IsNotEmpty()
    @IsStrongPassword()
    password:string;
}

