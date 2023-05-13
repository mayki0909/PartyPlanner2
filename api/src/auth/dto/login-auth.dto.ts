import { ApiProperty } from "@nestjs/swagger"

export class LoginDto {
  @ApiProperty({ type: String, required: true})
  username: string

  @ApiProperty({ type: String, required: true})
  password: string
}