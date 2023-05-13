import { ApiProperty } from "@nestjs/swagger"

export class CreateItemDto {
  @ApiProperty({ type: String, required: true})
  name: string

  @ApiProperty({ type: String, required: true})
  description: string

  @ApiProperty({ type: Number, required: true})
  quantity: number

  @ApiProperty({ type: Number, required: true})
  price: number
}
