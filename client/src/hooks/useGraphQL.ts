import { ExecutionResult } from 'graphql'
import { useMutation, useQuery } from '@tanstack/react-query'
import { TypedDocumentString } from '@/graphql/graphql'

export function useGraphQLQuery<TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
  variables?: TVariables,
) {
  return useQuery<ExecutionResult<TResult>, Error>({
    queryKey: [document, variables],
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: document.toString(),
          variables,
        }),
      })

      const data = await response.json()
      return data as ExecutionResult<TResult>
    },
  })
}

export function useGraphQLMutation<TResult, TVariables>(
  document: TypedDocumentString<TResult, TVariables>,
) {
  return useMutation<ExecutionResult<TResult>, Error, TVariables>({
    mutationFn: async (variables: TVariables) => {
      const response = await fetch('http://localhost:3000/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: document.toString(),
          variables,
        }),
      })

      const data = await response.json()
      return data as ExecutionResult<TResult>
    },
  })
}
