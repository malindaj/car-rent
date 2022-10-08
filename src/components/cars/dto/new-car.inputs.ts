import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class NewCarInput {

    @Field()
    name: string;

    @Field(type => Int)
    dailyPrice: number;

    @Field(type => Int)
    monthlyPrice: number;

    @Field()
    mileage: string;

    @Field()
    gas: string;

    @Field()
    gearType: string;

    @Field()
    thumbnailUrl: string;
}