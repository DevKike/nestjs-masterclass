import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class GetUserParamsDTO {
  @ApiPropertyOptional({
    description: 'Get user with a specific id',
    example: 'asd123',
  })
  @IsNotEmpty()
  @IsString()
  id?: string;
}
