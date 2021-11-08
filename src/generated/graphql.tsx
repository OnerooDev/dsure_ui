import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AmountResponse = {
  __typename?: 'AmountResponse';
  amount: Scalars['Float'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type IdResponse = {
  __typename?: 'IDResponse';
  id: Scalars['String'];
};

export type IdentityUserInputs = {
  birth_date: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  live_country: Scalars['String'];
  middle_name: Scalars['String'];
  passport_country: Scalars['String'];
};

export type InfoResponse = {
  __typename?: 'InfoResponse';
  address: Scalars['String'];
  amount: Scalars['Float'];
  id: Scalars['String'];
  plan: Scalars['String'];
  status: Scalars['String'];
  timelock: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addIdentityUser?: Maybe<UserResponse>;
  confirmEmail?: Maybe<UserResponse>;
  createPost: PostResponse;
  createUser: UserResponse;
  deletePost: Scalars['Boolean'];
  resendEmailConfirm: User;
  updatePost?: Maybe<Post>;
  updateUserEmail?: Maybe<User>;
};


export type MutationAddIdentityUserArgs = {
  eth_address: Scalars['String'];
  userPams: IdentityUserInputs;
};


export type MutationConfirmEmailArgs = {
  token: Scalars['String'];
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationCreateUserArgs = {
  userPams: CreateUserInputs;
};


export type MutationDeletePostArgs = {
  id: Scalars['Float'];
};


export type MutationResendEmailConfirmArgs = {
  eth_address: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  id: Scalars['Float'];
  title?: Maybe<Scalars['String']>;
};


export type MutationUpdateUserEmailArgs = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};

export type Post = {
  __typename?: 'Post';
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  title: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type PostResponse = {
  __typename?: 'PostResponse';
  errors?: Maybe<Array<FieldError>>;
  post?: Maybe<Post>;
};

export type Query = {
  __typename?: 'Query';
  emailExist?: Maybe<User>;
  post?: Maybe<Post>;
  posts: Array<Post>;
  tokenAllowance?: Maybe<AmountResponse>;
  tokenBalance?: Maybe<AmountResponse>;
  user?: Maybe<User>;
  users: Array<User>;
  vaultID?: Maybe<IdResponse>;
  vaultInfo?: Maybe<InfoResponse>;
};


export type QueryEmailExistArgs = {
  eth_address: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['Float'];
};


export type QueryTokenAllowanceArgs = {
  eth_address: Scalars['String'];
};


export type QueryTokenBalanceArgs = {
  eth_address: Scalars['String'];
};


export type QueryUserArgs = {
  id: Scalars['Float'];
};


export type QueryVaultIdArgs = {
  eth_address: Scalars['String'];
};


export type QueryVaultInfoArgs = {
  id: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  birth_date: Scalars['String'];
  createdAt: Scalars['String'];
  email: Scalars['String'];
  email_status: Scalars['Int'];
  eth_address: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  live_country: Scalars['String'];
  middle_name: Scalars['String'];
  passport_country: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type CreateUserInputs = {
  email: Scalars['String'];
  eth_address: Scalars['String'];
};

export type RegularErrorFragment = { __typename?: 'FieldError', field: string, message: string };

export type RegularUserFragment = { __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string };

export type RegularUserResponseFragment = { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string }> };

export type AddIdentityUserMutationVariables = Exact<{
  eth_address: Scalars['String'];
  userPams: IdentityUserInputs;
}>;


export type AddIdentityUserMutation = { __typename?: 'Mutation', addIdentityUser?: Maybe<{ __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string }> }> };

export type ConfirmEmailMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ConfirmEmailMutation = { __typename?: 'Mutation', confirmEmail?: Maybe<{ __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string }> }> };

export type CreateUserMutationVariables = Exact<{
  userPams: CreateUserInputs;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string }> } };

export type ResendEmailConfirmMutationVariables = Exact<{
  eth_address: Scalars['String'];
}>;


export type ResendEmailConfirmMutation = { __typename?: 'Mutation', resendEmailConfirm: { __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string } };

export type EmailExistQueryVariables = Exact<{
  eth_address: Scalars['String'];
}>;


export type EmailExistQuery = { __typename?: 'Query', emailExist?: Maybe<{ __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string }> };

export type GetTokenAllowanceQueryVariables = Exact<{
  eth_address: Scalars['String'];
}>;


export type GetTokenAllowanceQuery = { __typename?: 'Query', tokenAllowance?: Maybe<{ __typename?: 'AmountResponse', amount: number }> };

export type GetTokenBalanceQueryVariables = Exact<{
  eth_address: Scalars['String'];
}>;


export type GetTokenBalanceQuery = { __typename?: 'Query', tokenBalance?: Maybe<{ __typename?: 'AmountResponse', amount: number }> };

export type GetInfoQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetInfoQuery = { __typename?: 'Query', vaultInfo?: Maybe<{ __typename?: 'InfoResponse', id: string, address: string, plan: string, amount: number, status: string, timelock: number }> };

export type GetVaultsQueryVariables = Exact<{
  eth_address: Scalars['String'];
}>;


export type GetVaultsQuery = { __typename?: 'Query', vaultID?: Maybe<{ __typename?: 'IDResponse', id: string }> };

export const RegularErrorFragmentDoc = gql`
    fragment RegularError on FieldError {
  field
  message
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  eth_address
  email
  email_status
  first_name
}
    `;
export const RegularUserResponseFragmentDoc = gql`
    fragment RegularUserResponse on UserResponse {
  errors {
    ...RegularError
  }
  user {
    ...RegularUser
  }
}
    ${RegularErrorFragmentDoc}
${RegularUserFragmentDoc}`;
export const AddIdentityUserDocument = gql`
    mutation addIdentityUser($eth_address: String!, $userPams: IdentityUserInputs!) {
  addIdentityUser(eth_address: $eth_address, userPams: $userPams) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useAddIdentityUserMutation() {
  return Urql.useMutation<AddIdentityUserMutation, AddIdentityUserMutationVariables>(AddIdentityUserDocument);
};
export const ConfirmEmailDocument = gql`
    mutation confirmEmail($token: String!) {
  confirmEmail(token: $token) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useConfirmEmailMutation() {
  return Urql.useMutation<ConfirmEmailMutation, ConfirmEmailMutationVariables>(ConfirmEmailDocument);
};
export const CreateUserDocument = gql`
    mutation createUser($userPams: createUserInputs!) {
  createUser(userPams: $userPams) {
    ...RegularUserResponse
  }
}
    ${RegularUserResponseFragmentDoc}`;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};
export const ResendEmailConfirmDocument = gql`
    mutation resendEmailConfirm($eth_address: String!) {
  resendEmailConfirm(eth_address: $eth_address) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useResendEmailConfirmMutation() {
  return Urql.useMutation<ResendEmailConfirmMutation, ResendEmailConfirmMutationVariables>(ResendEmailConfirmDocument);
};
export const EmailExistDocument = gql`
    query EmailExist($eth_address: String!) {
  emailExist(eth_address: $eth_address) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

export function useEmailExistQuery(options: Omit<Urql.UseQueryArgs<EmailExistQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<EmailExistQuery>({ query: EmailExistDocument, ...options });
};
export const GetTokenAllowanceDocument = gql`
    query GetTokenAllowance($eth_address: String!) {
  tokenAllowance(eth_address: $eth_address) {
    amount
  }
}
    `;

export function useGetTokenAllowanceQuery(options: Omit<Urql.UseQueryArgs<GetTokenAllowanceQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTokenAllowanceQuery>({ query: GetTokenAllowanceDocument, ...options });
};
export const GetTokenBalanceDocument = gql`
    query GetTokenBalance($eth_address: String!) {
  tokenBalance(eth_address: $eth_address) {
    amount
  }
}
    `;

export function useGetTokenBalanceQuery(options: Omit<Urql.UseQueryArgs<GetTokenBalanceQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetTokenBalanceQuery>({ query: GetTokenBalanceDocument, ...options });
};
export const GetInfoDocument = gql`
    query GetInfo($id: String!) {
  vaultInfo(id: $id) {
    id
    address
    plan
    amount
    status
    timelock
  }
}
    `;

export function useGetInfoQuery(options: Omit<Urql.UseQueryArgs<GetInfoQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetInfoQuery>({ query: GetInfoDocument, ...options });
};
export const GetVaultsDocument = gql`
    query GetVaults($eth_address: String!) {
  vaultID(eth_address: $eth_address) {
    id
  }
}
    `;

export function useGetVaultsQuery(options: Omit<Urql.UseQueryArgs<GetVaultsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetVaultsQuery>({ query: GetVaultsDocument, ...options });
};