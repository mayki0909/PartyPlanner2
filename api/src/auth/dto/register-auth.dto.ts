import { ApiProperty } from "@nestjs/swagger"

export class RegisterDto {
  @ApiProperty({ type: String})
  name: string

  @ApiProperty({ type: String, required: true})
  lastname: string

  @ApiProperty({ type: String, required: true})
  username: string

  @ApiProperty({ type: String, required: true})
  email: string

  @ApiProperty({ type: String, required: true})
  password: string

  @ApiProperty({ type: String, required: true})
  confirmPassword: string
}