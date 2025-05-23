import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  IsString,
  IsDate,
  IsBoolean,
  IsOptional,
  IsNumber,
} from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReturnRequirementDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  originalRequirementId?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  fromCity?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  toCity?: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  carType?: string;

  @ApiProperty({ type: String, format: 'date-time' })
  @IsDate()
  @Type(() => Date)
  returnPickupDate: Date;

  @ApiProperty()
  @IsString()
  returnPickupTime: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsNumber()
  returnBudget?: number;

  @ApiProperty()
  @IsBoolean()
  onlyVerified: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  comment?: string;
}
