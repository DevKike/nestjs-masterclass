import { IsString, IsUrl } from 'class-validator';

export class CreatePostDTO {
  @IsString()
  title: string;
  @IsString()
  content: string;
  @IsUrl()
  link: string;
}
