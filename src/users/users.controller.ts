import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { IUser } from './interfaces/user.interface';
import { IDeleteUser } from './interfaces/delete.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post()
    addUser(@Body() createUser: CreateUserDto): Promise<IUser>{
        return this.userService.add(createUser);
    }
    
    @Get()
    getUsers(): Promise<IUser[]>{
        return this.userService.get();
    }

    @Put(':id')
    updateUser(@Param('id') id: string, @Body() updateUserDto: CreateUserDto): Promise<IUser>{
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: string):Promise<IUser>{
        return this.userService.delete(id);
    }
}
