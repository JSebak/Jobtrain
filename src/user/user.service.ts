/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { validate } from "class-validator";
import { Repository } from "typeorm";
import { User } from "./user.entity";

@Injectable()
export class UserService{

    constructor(    
        @Inject('USER_REPOSITORY')
    private userRepository: Repository<User>,) {


    }
    getAll(): Promise<User[]>{
        return this.userRepository.find()
    }

    async create(attr: object){
        const newUser = this.userRepository.create(attr)
        const errors = await validate(newUser);
        console.log("User: ",newUser);
        console.log(attr);
        if(errors.length==0){
            return this.userRepository.save(newUser);
        }
        throw new HttpException(errors, HttpStatus.BAD_REQUEST);
    }
}