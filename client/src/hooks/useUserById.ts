import { graphql } from '@/graphql'
import { User } from '@/graphql/graphql'
import { useGraphQLQuery } from './useGraphQL'

export const USER_BY_ID_QUERY = graphql(`
  query User($userId: Int!) {
    user(id: $userId) {
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`)

export function useUserById(userId: User['id']) {
  const { data } = useGraphQLQuery(USER_BY_ID_QUERY, { userId })
  return data?.data?.user
}
