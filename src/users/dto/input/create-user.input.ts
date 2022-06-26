import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsInt, IsNotEmpty, IsNumber } from "class-validator";

@InputType()
export class CreateUserInput {
    @Field()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @Field()
    @IsNotEmpty()
    name: string;

    @Field()
    @IsNotEmpty()
    @IsInt()
    age: number;

}