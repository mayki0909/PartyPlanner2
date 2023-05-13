import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator'

export class CreateUserDto {
  @IsString()
  @ApiProperty({ type: String, required: true})
  name: string

  @IsString()
  @ApiProperty({ type: String })
  lastname: string

  @IsString()
  @IsNotEmpty()
  @ApiPropertyOptional({ type: String })
  username: string

  @IsEmail()
  @ApiProperty({ type: String })
  email: string

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  password: string

  @IsString()
  @ApiPropertyOptional({ type: String })
  phone: string

  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean })
  drive: boolean

  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean })
  drink: boolean

  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean })
  vegan: boolean

  @IsBoolean()
  @ApiPropertyOptional({ type: Boolean })
  eat: boolean
}
