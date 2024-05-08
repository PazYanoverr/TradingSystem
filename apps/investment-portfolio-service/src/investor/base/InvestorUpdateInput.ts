/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { InvestmentUpdateManyWithoutInvestorsInput } from "./InvestmentUpdateManyWithoutInvestorsInput";
import { Type } from "class-transformer";

@InputType()
class InvestorUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  address?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  bankAccount?: string | null;

  @ApiProperty({
    required: false,
    type: () => InvestmentUpdateManyWithoutInvestorsInput,
  })
  @ValidateNested()
  @Type(() => InvestmentUpdateManyWithoutInvestorsInput)
  @IsOptional()
  @Field(() => InvestmentUpdateManyWithoutInvestorsInput, {
    nullable: true,
  })
  investments?: InvestmentUpdateManyWithoutInvestorsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { InvestorUpdateInput as InvestorUpdateInput };