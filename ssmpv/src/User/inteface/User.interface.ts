import * as mongoose from 'mongoose';

export interface IUser extends Document{
    

    //readonly _id: mongoose.Schema.Types.ObjectId;
    readonly name:String;
    readonly birthday:Date;
    readonly email:String;
    readonly password:String;
}