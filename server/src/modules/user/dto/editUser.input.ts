import { Field, InputType } from '@nestjs/graphql'
import { IsOptional, MaxLength } from 'class-validator'

@InputType()
export class EditUserInput {
  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(30)
  firstName?: string

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(30)
  fatherName?: string

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(30)
  grandfatherName?: string

  @Field({ nullable: true })
  @IsOptional()
  @MaxLength(30)
  familyName?: string
}
