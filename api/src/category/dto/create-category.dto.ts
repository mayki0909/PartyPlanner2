import { ApiProperty } from "@nestjs/swagger"

export class CreateCategoryDto {
  @ApiProperty({ type: String, required: true})
  name: string

  @ApiProperty({ type: String, required: true})
  icon: string
}
