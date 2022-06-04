/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from "@nestjs/common";
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
        return this.userService.create(attr);
    }
}