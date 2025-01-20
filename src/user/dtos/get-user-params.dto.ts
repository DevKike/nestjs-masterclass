import { IsNotEmpty, IsString } from 'class-validator';

export class GetUserParamsDTO {
  @IsNotEmpty()
  @IsString()
  id: string;
}
