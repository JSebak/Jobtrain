/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
import { encodePassword } from "src/Utilities/bcrypt";
import { UserService } from "./user.service";

@Controller('users')
export class UserController{

    constructor(private readonly userService: UserService) {}
    @Get()
    getAll(){
        return this.userService.getAll();
    }

    @Post()
    register(@Body() attr){
        console.log(attr)
        const password = encodePassword(attr.password)
        console.log(password)
        const newUser= this.userService.create({...attr,password})
        return newUser;
    }
}