import { IsString } from "class-validator";



export class sugestion {
    
    @IsString()
    title:string;

    @IsString()
    content:string;
    

}