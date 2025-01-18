import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(30)
  firstName: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @MaxLength(30)
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;

  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
}
