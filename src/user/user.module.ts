/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { UserController } from './user.controller';
import { userProvider } from './user.provider';
import { UserService } from './user.service';
import { IsEmailAlreadyExistConstrain } from './Validators/is-email-already-exists.validator';
import { IsIdAlreadyExistConstrain } from './Validators/is-id-already-exists.validator';


@Module({
    imports: [DatabaseModule],
    providers: [
        ...userProvider,
        UserService,
        IsEmailAlreadyExistConstrain,
        IsIdAlreadyExistConstrain
    ],
    controllers:[UserController]
})
export class UserModule {}
