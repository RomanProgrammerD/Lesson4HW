import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class UsersService {
    constructor(@InjectModel('User') private readonly userModel) {}

    async add(user: IUser): Promise<IUser>{
        const newUser = this.userModel(user);
        return await newUser.save();
    }

    async get(): Promise<IUser[]>{
        const user = await this.userModel.find();
        return user;
    }

    async update(id: string, user: IUser): Promise<IUser>{
        return await this.userModel.findByIdAndUpdate(id, user, { new: true });
    }

    async delete(id: string): Promise<IUser>{
        return await this.userModel.findByIdAndDelete(id);
    }
}
