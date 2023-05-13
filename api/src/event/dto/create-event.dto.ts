import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateEventDto {
  @ApiProperty({ type: String })
  name: string

  @ApiPropertyOptional({ type: String })
  description: string

  @ApiProperty({ type: String })
  location: string

  @ApiProperty({ type: Date })
  dateFrom: Date

  @ApiProperty({ type: Date })
  dateTo: Date
  
  @ApiPropertyOptional({ type: Boolean })
  public: boolean

  @ApiPropertyOptional({ type: Date })
  creationDate: Date
}
