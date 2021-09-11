import {gql} from '@apollo/client'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type Exact<T extends {[key: string]: unknown}> = {[K in keyof T]: T[K]}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>}
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>}
const defaultOptions = {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Coordinates: any
  Decimal: any
  JSON: any
  Time: any
}

export type InitAuthReply = {
  __typename?: 'InitAuthReply'
  csrf: Scalars['String']
  url: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  ping: Scalars['String']
  initAuth?: Maybe<InitAuthReply>
  exchangeForToken: UserToken
  refreshToken: UserToken
}

export type MutationInitAuthArgs = {
  redirectURI: Scalars['String']
}

export type MutationExchangeForTokenArgs = {
  redirectURI: Scalars['String']
  code: Scalars['String']
}

export type MutationRefreshTokenArgs = {
  token: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  ping: Scalars['String']
  me?: Maybe<User>
}

export type User = {
  __typename?: 'User'
  id: Scalars['String']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  name: Scalars['String']
  avatar: Scalars['String']
  lastLogin?: Maybe<Scalars['Time']>
}

export type UserToken = {
  __typename?: 'UserToken'
  id: Scalars['String']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  expiresAt: Scalars['Time']
  refreshToken: Scalars['String']
  user: User
}

export type ThisUserQueryVariables = Exact<{[key: string]: never}>

export type ThisUserQuery = {__typename?: 'Query'} & {
  me?: Maybe<{__typename?: 'User'} & Pick<User, 'name' | 'avatar'>>
}

export const ThisUserDocument = gql`
  query thisUser {
    me {
      name
      avatar
    }
  }
`

export const ThisTokenDocument = gql`
  query thisToken {
    me {
      name
      avatar
    }
  }
`

/**
 * __useThisUserQuery__
 *
 * To run a query within a React component, call `useThisUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useThisUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useThisUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useThisUserQuery(
  baseOptions?: Apollo.QueryHookOptions<ThisUserQuery, ThisUserQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useQuery<ThisUserQuery, ThisUserQueryVariables>(ThisUserDocument, options)
}
export function useThisUserLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<ThisUserQuery, ThisUserQueryVariables>
) {
  const options = {...defaultOptions, ...baseOptions}
  return Apollo.useLazyQuery<ThisUserQuery, ThisUserQueryVariables>(ThisUserDocument, options)
}
export type ThisUserQueryHookResult = ReturnType<typeof useThisUserQuery>
export type ThisUserLazyQueryHookResult = ReturnType<typeof useThisUserLazyQuery>
export type ThisUserQueryResult = Apollo.QueryResult<ThisUserQuery, ThisUserQueryVariables>
