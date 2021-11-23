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

export type Certs = {
  __typename?: 'Certs';
  cert_number: Scalars['String'];
  createdAt: Scalars['String'];
  deposit_id: Scalars['Int'];
  expire_date: Scalars['Int'];
  id: Scalars['Int'];
  owner: Scalars['String'];
  plan_status: Scalars['Int'];
  status: Scalars['Int'];
  updatedAt: Scalars['String'];
  url_cert: Scalars['String'];
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
  day: Scalars['String'];
  first_name: Scalars['String'];
  last_name: Scalars['String'];
  live_country: Scalars['String'];
  middle_name: Scalars['String'];
  month: Scalars['String'];
  passport_country: Scalars['String'];
  year: Scalars['String'];
};

export type InfoResponse = {
  __typename?: 'InfoResponse';
  address: Scalars['String'];
  amount: Scalars['Float'];
  id: Scalars['Float'];
  plan: Scalars['Float'];
  status: Scalars['Float'];
  timelock: Scalars['Float'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addIdentityUser?: Maybe<UserResponse>;
  confirmEmail?: Maybe<UserResponse>;
  createCert?: Maybe<Certs>;
  createUser: UserResponse;
  deleteCert: Scalars['Boolean'];
  resendEmailConfirm: User;
  updateCert?: Maybe<Certs>;
  updateUserEmail?: Maybe<User>;
};


export type MutationAddIdentityUserArgs = {
  eth_address: Scalars['String'];
  userPams: IdentityUserInputs;
};


export type MutationConfirmEmailArgs = {
  token: Scalars['String'];
};


export type MutationCreateCertArgs = {
  deposit_id: Scalars['Float'];
  owner: Scalars['String'];
  plan_status: Scalars['Float'];
};


export type MutationCreateUserArgs = {
  userPams: CreateUserInputs;
};


export type MutationDeleteCertArgs = {
  id: Scalars['Float'];
};


export type MutationResendEmailConfirmArgs = {
  eth_address: Scalars['String'];
};


export type MutationUpdateCertArgs = {
  cert_number: Scalars['String'];
  expire_date: Scalars['Float'];
  id: Scalars['Float'];
  url_cert: Scalars['String'];
};


export type MutationUpdateUserEmailArgs = {
  email?: Maybe<Scalars['String']>;
  id: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  cert?: Maybe<Certs>;
  certs: Array<Certs>;
  emailExist?: Maybe<User>;
  requests: Array<Certs>;
  tokenAllowance?: Maybe<AmountResponse>;
  tokenBalance?: Maybe<AmountResponse>;
  user?: Maybe<User>;
  users: Array<User>;
  vaultID?: Maybe<IdResponse>;
  vaultInfo?: Maybe<InfoResponse>;
};


export type QueryCertArgs = {
  deposit_id: Scalars['Float'];
};


export type QueryEmailExistArgs = {
  eth_address: Scalars['String'];
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
  id: Scalars['Float'];
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

export type RegularCertFragment = { __typename?: 'Certs', id: number, deposit_id: number, status: number, plan_status: number, owner: string };

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

export type CreateCertMutationVariables = Exact<{
  deposit_id: Scalars['Float'];
  owner: Scalars['String'];
  plan_status: Scalars['Float'];
}>;


export type CreateCertMutation = { __typename?: 'Mutation', createCert?: Maybe<{ __typename?: 'Certs', id: number, deposit_id: number, status: number, plan_status: number, owner: string }> };

export type CreateUserMutationVariables = Exact<{
  userPams: CreateUserInputs;
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'UserResponse', errors?: Maybe<Array<{ __typename?: 'FieldError', field: string, message: string }>>, user?: Maybe<{ __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string }> } };

export type ResendEmailConfirmMutationVariables = Exact<{
  eth_address: Scalars['String'];
}>;


export type ResendEmailConfirmMutation = { __typename?: 'Mutation', resendEmailConfirm: { __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string } };

export type UpdateCertMutationVariables = Exact<{
  id: Scalars['Float'];
  expire_date: Scalars['Float'];
  url_cert: Scalars['String'];
  cert_number: Scalars['String'];
}>;


export type UpdateCertMutation = { __typename?: 'Mutation', updateCert?: Maybe<{ __typename?: 'Certs', id: number, deposit_id: number, status: number, plan_status: number, owner: string }> };

export type EmailExistQueryVariables = Exact<{
  eth_address: Scalars['String'];
}>;


export type EmailExistQuery = { __typename?: 'Query', emailExist?: Maybe<{ __typename?: 'User', id: number, eth_address: string, email: string, email_status: number, first_name: string }> };

export type GetCertQueryVariables = Exact<{
  deposit_id: Scalars['Float'];
}>;


export type GetCertQuery = { __typename?: 'Query', cert?: Maybe<{ __typename?: 'Certs', id: number, deposit_id: number, plan_status: number, status: number, expire_date: number, url_cert: string, cert_number: string }> };

export type GetRequestsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetRequestsQuery = { __typename?: 'Query', requests: Array<{ __typename?: 'Certs', id: number, deposit_id: number, status: number, plan_status: number, owner: string }> };

export const RegularCertFragmentDoc = gql`
    fragment RegularCert on Certs {
  id
  deposit_id
  status
  plan_status
  owner
}
    `;
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
export const CreateCertDocument = gql`
    mutation createCert($deposit_id: Float!, $owner: String!, $plan_status: Float!) {
  createCert(deposit_id: $deposit_id, owner: $owner, plan_status: $plan_status) {
    ...RegularCert
  }
}
    ${RegularCertFragmentDoc}`;

export function useCreateCertMutation() {
  return Urql.useMutation<CreateCertMutation, CreateCertMutationVariables>(CreateCertDocument);
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
export const UpdateCertDocument = gql`
    mutation updateCert($id: Float!, $expire_date: Float!, $url_cert: String!, $cert_number: String!) {
  updateCert(
    id: $id
    expire_date: $expire_date
    url_cert: $url_cert
    cert_number: $cert_number
  ) {
    ...RegularCert
  }
}
    ${RegularCertFragmentDoc}`;

export function useUpdateCertMutation() {
  return Urql.useMutation<UpdateCertMutation, UpdateCertMutationVariables>(UpdateCertDocument);
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
export const GetCertDocument = gql`
    query GetCert($deposit_id: Float!) {
  cert(deposit_id: $deposit_id) {
    id
    deposit_id
    plan_status
    status
    expire_date
    url_cert
    cert_number
  }
}
    `;

export function useGetCertQuery(options: Omit<Urql.UseQueryArgs<GetCertQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetCertQuery>({ query: GetCertDocument, ...options });
};
export const GetRequestsDocument = gql`
    query GetRequests {
  requests {
    ...RegularCert
  }
}
    ${RegularCertFragmentDoc}`;

export function useGetRequestsQuery(options: Omit<Urql.UseQueryArgs<GetRequestsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetRequestsQuery>({ query: GetRequestsDocument, ...options });
};