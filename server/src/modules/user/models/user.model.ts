import { Field, Int, ObjectType } from '@nestjs/graphql'

@ObjectType()
class LocalizedName {
  @Field() firstName: string
  @Field() fatherName: string
  @Field() grandfatherName: string
  @Field() familyName: string
}

@ObjectType()
class NationalId {
  @Field() idNumber: string
  @Field() expiryDate: string
}

@ObjectType()
class Country {
  @Field() id: string
  @Field() name: string
}

@ObjectType()
class Nationality {
  @Field(() => Country) country: Country
  @Field() countryId: number
}

@ObjectType()
class MaritalStatus {
  @Field() id: string
  @Field() name: string
}

@ObjectType()
export class User {
  @Field(() => Int) id: number
  @Field() firstName: string
  @Field() fatherName: string
  @Field() grandfatherName: string
  @Field() familyName: string
  @Field(() => LocalizedName) localizedName: LocalizedName
  @Field(() => NationalId) nationalId: NationalId
  @Field(() => [Nationality]) nationalities: Nationality[]
  @Field(() => MaritalStatus) maritalStatus: MaritalStatus
  @Field() dependants: number
}
