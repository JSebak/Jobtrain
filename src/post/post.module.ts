/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { PostController } from './post.controller';
import { postProvider } from './post.provider';
import { PostService } from './post.service';


@Module({
    imports: [DatabaseModule],
    providers: [
        ...postProvider,
        PostService,
    ],
    controllers:[PostController]
})
export class PostModule {}
