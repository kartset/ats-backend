import { IsOptional } from 'class-validator';

export class CreateOrganisationDto {
  name: string;
  @IsOptional()
  pan: string;
  @IsOptional()
  gst: string;
  @IsOptional()
  description: string;
}
