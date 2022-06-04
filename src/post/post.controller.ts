/* eslint-disable prettier/prettier */
import { Controller, Get, Param } from "@nestjs/common";
import { Post } from "./post.entity";
import { PostService } from "./post.service";

@Controller('posts')
export class PostController{

    constructor(private postService: PostService) {}
    @Get()
    findAll(): Promise<Post[]>{
        return this.postService.findAll();
    }
    @Get(":id")
    findById(@Param() param): Promise<Post>{
        return this.postService.find(param.id)
    }
}
//async -> await no continua
//then -> flujo sigue 