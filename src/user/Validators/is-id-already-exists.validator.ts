/* eslint-disable prettier/prettier */
import { Inject, Injectable } from "@nestjs/common";
import { registerDecorator, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { Repository } from "typeorm";
import { User } from "../user.entity";

@ValidatorConstraint({ name: 'isIdAlreadyExist', async: true })
@Injectable() // this is needed in order to the class be injected into the module
export class IsIdAlreadyExistConstrain implements ValidatorConstraintInterface {
    constructor(
      @Inject('USER_REPOSITORY')
      protected readonly userRepository: Repository<User>
    ) {}

    async validate(id: number) {
        const user = await this.userRepository.findOne({
          where: {
            id,
          },
        });
        return !user;
    }
}

export function IsIdAlreadyExist(validationOptions?: ValidationOptions) {
    // eslint-disable-next-line @typescript-eslint/ban-types
    return function (object: Object, propertyName: string) {
      registerDecorator({
        target: object.constructor,
        propertyName: propertyName,
        options: validationOptions,
        constraints: [],
        validator: IsIdAlreadyExistConstrain,
      });
    };
  }