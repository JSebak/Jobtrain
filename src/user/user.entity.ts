/* eslint-disable prettier/prettier */
import { IsEmail, isNotEmpty, IsNotEmpty, Length, Matches, max, MaxLength, MinLength, Validate } from 'class-validator';
import { Column, Entity, PrimaryColumn, Unique } from 'typeorm';
import { IsEmailAlreadyExist } from './Validators/is-email-already-exists.validator';
import { IsIdAlreadyExist } from './Validators/is-id-already-exists.validator';

@Entity({name:'user'})
export class User {

  @PrimaryColumn('int')
    //   @Validate(IsIdAlreadyExistConstrain,{
  //   message:"Id $value already exists"
  // })
  @IsIdAlreadyExist({
    message: 'Id $value already exists.'
  })
  id: number;

  @Column({ length: 250 })
  @IsNotEmpty()
  @IsEmail()
// })
// @Validate(IsEmailAlreadyExistConstrain,{
//   message:"Email $value already exists"
// })
  @IsEmailAlreadyExist({
    message: 'Email $value already exists. Choose another email.',
  })
  email: string;

  @Column({ length: 250 })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  first_name: string;

  @Column({ length: 250 })
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(100)
  last_name: string;

  @Column('date')
  creation_date: Date;

  @Column('date')
  modification_date: Date|null;

  @Column({length: 250})
  @IsNotEmpty()
  @MinLength(8)
  @Matches(/^(\W[0-9][A-Z])|(.[0-9][A-Z]).*\W.*$/, {
    message: 'password should include one special character, the second character must be a number and the third an uppercased letter',
  })
  password: string;

  @Column({length: 10})
  @IsNotEmpty()
  @Length(10,10)
  @Matches(/(.[0-9])/, {
    message: 'phone number $value should include only numbers',
  })
  phone_number: string;
}