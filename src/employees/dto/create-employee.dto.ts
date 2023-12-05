import { IsOptional, IsEmail } from 'class-validator';

export class CreateEmployeeDto {
  name: string;
  avatar: string;
  empCode: string;
  @IsOptional()
  active: boolean;
  contact: string;
  @IsEmail()
  email: string;
  aadhaar: string;
  pan: string;
  department: string;
  role: string;
  orgId: string;
}
