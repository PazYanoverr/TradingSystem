/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { InvestmentWhereUniqueInput } from "./InvestmentWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { InvestmentUpdateInput } from "./InvestmentUpdateInput";

@ArgsType()
class UpdateInvestmentArgs {
  @ApiProperty({
    required: true,
    type: () => InvestmentWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => InvestmentWhereUniqueInput)
  @Field(() => InvestmentWhereUniqueInput, { nullable: false })
  where!: InvestmentWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => InvestmentUpdateInput,
  })
  @ValidateNested()
  @Type(() => InvestmentUpdateInput)
  @Field(() => InvestmentUpdateInput, { nullable: false })
  data!: InvestmentUpdateInput;
}

export { UpdateInvestmentArgs as UpdateInvestmentArgs };
