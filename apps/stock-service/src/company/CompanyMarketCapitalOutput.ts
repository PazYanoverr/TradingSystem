import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("CompanyMarketCapitalOutputObject")
class CompanyMarketCapitalOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    companyName!: string;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    marketCapital!: number;

    @Field(() => Date)
    @Type(() => Date)
    calculatedAt!: Date;
}

export { CompanyMarketCapitalOutput as CompanyMarketCapitalOutput };