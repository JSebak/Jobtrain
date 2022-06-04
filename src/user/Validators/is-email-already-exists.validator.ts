/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/ban-types */
import {
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationOptions,
    registerDecorator
  } from 'class-validator';
  import {Injectable, Inject} from '@nestjs/common';
  import { Repository } from 'typeorm';
  import { User } from '../user.entity';
  
  @ValidatorConstraint({ name: 'isEmailAlreadyExist', async: true })
  @Injectable()
  export class IsEmailAlreadyExistConstrain implements ValidatorConstraintInterface {
      constructor(
        @Inject('USER_REPOSITORY')
        protected readonly userRepository: Repository<User>
      ) {}
  
      async validate(email: string) {
          const user = await this.userRepository.findOne({
            where: {
              email,
            },
          });
          return !user;
      }
  }
  
  export function IsEmailAlreadyExist(validationOptions?: ValidationOptions) {
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsEmailAlreadyExistConstrain,
      });
    };
  }
  