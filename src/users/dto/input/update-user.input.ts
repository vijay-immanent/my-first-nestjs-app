import { Field, InputType } from "@nestjs/graphql";
import { IsBoolean, IsEmail, IsInt, IsNotEmpty, IsOptional } from "class-validator";

@InputType()
export class UpdateUserInput {
    @Field()
    @IsNotEmpty()
    userId: string;
     
    @Field({ nullable: true})
    @IsOptional()
    name?: string;

    @Field({ nullable: true})
    @IsOptional()
    @IsInt()
    age?: number;

    @Field({ nullable: true})
    @IsOptional()
    @IsEmail()
    email?: string;

    @Field({ nullable: true})
    @IsOptional()
    @IsBoolean()
    isSubscribed?: boolean;
}