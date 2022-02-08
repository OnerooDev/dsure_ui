import { dedupExchange, fetchExchange } from 'urql';
import { cacheExchange, Cache, QueryInput } from '@urql/exchange-graphcache';
import { ClientOptions } from '@urql/core';
import { EmailExistDocument, EmailExistQuery, CreateUserMutation } from '../generated/graphql';
import { NextUrqlClientConfig, SSRExchange } from 'next-urql';
function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query
) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}

export const createUrqlClient: NextUrqlClientConfig = (ssrExchange: SSRExchange, ctx?: any): ClientOptions => ({
  url: 'https://hbnjkkbhukl.dsure.io/graphql',
  fetchOptions: {
    credentials: 'include' as const,
  },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {

          createUser: (_result, args, cache, info) => {
            betterUpdateQuery<CreateUserMutation, EmailExistQuery>(
              cache,
              {query: EmailExistDocument},
              _result,
              (result, query) => {
                if (result.createUser.errors) {
                  return query;
                } else {
                  return {
                    emailExist: result.createUser.user
                  }
                }
              }
            )
          },

        },
      },
    }),
    ssrExchange,
    fetchExchange],
});
