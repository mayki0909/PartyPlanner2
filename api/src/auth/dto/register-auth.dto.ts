import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export class RegisterDto {
  @IsString()
  @ApiProperty({ type: String})
  name: string

  @IsString()
  @ApiProperty({ type: String, required: true})
  lastname: string

  @IsString()
  @ApiProperty({ type: String, required: true})
  username: string

  @IsEmail()
  @ApiProperty({ type: String, required: true})
  email: string

  @IsString()
  @ApiProperty({ type: String, required: true})
  password: string

  @IsString()
  @ApiProperty({ type: String, required: true})
  confirmPassword: string
}