/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Country = {
  __typename?: 'Country';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type EditUserInput = {
  familyName?: InputMaybe<Scalars['String']['input']>;
  fatherName?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  grandfatherName?: InputMaybe<Scalars['String']['input']>;
};

export type LocalizedName = {
  __typename?: 'LocalizedName';
  familyName: Scalars['String']['output'];
  fatherName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  grandfatherName: Scalars['String']['output'];
};

export type MaritalStatus = {
  __typename?: 'MaritalStatus';
  id: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Mutation = {
  __typename?: 'Mutation';
  editUser?: Maybe<User>;
};


export type MutationEditUserArgs = {
  newData: EditUserInput;
  userId: Scalars['Int']['input'];
};

export type NationalId = {
  __typename?: 'NationalId';
  expiryDate: Scalars['String']['output'];
  idNumber: Scalars['String']['output'];
};

export type Nationality = {
  __typename?: 'Nationality';
  country: Country;
  countryId: Scalars['Float']['output'];
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['Int']['input'];
};

export type User = {
  __typename?: 'User';
  dependants: Scalars['Float']['output'];
  familyName: Scalars['String']['output'];
  fatherName: Scalars['String']['output'];
  firstName: Scalars['String']['output'];
  grandfatherName: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  localizedName: LocalizedName;
  maritalStatus: MaritalStatus;
  nationalId: NationalId;
  nationalities: Array<Nationality>;
};

export type EditUserMutationVariables = Exact<{
  userId: Scalars['Int']['input'];
  newData: EditUserInput;
}>;


export type EditUserMutation = { __typename?: 'Mutation', editUser?: { __typename?: 'User', id: number, firstName: string } | null };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const EditUserDocument = new TypedDocumentString(`
    mutation editUser($userId: Int!, $newData: EditUserInput!) {
  editUser(userId: $userId, newData: $newData) {
    id
    firstName
  }
}
    `) as unknown as TypedDocumentString<EditUserMutation, EditUserMutationVariables>;