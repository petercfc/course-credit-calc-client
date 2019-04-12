// other
import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./configs/serviceWorker";

//apollo
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "react-apollo-hooks";
import { concat } from "apollo-link";
import { RetryLink } from "apollo-link-retry";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { HttpLink } from "apollo-link-http";

import { typeDefs } from "./apollo/typeDefs";
import { resolvers } from "./apollo/resolvers";

//pages
import Index from "./pages/index";

//create link from retry object and http endpoint
const retry = new RetryLink({ attempts: { max: Infinity } });
const http = new HttpLink({
  uri: "https://course-credit-calc-api.herokuapp.com/graphql/"
});
const link = concat(retry, http);

//create inmemory cache and save it to local storage
const cache = new InMemoryCache();
const storage = window.localStorage;
const waitOnCache = persistCache({ cache, storage });

//apollo defaults
const defaultOptions = {
  watchQuery: {},
  query: {
    fetchPolicy: "cache-and-network"
  },
  mutate: {}
};

// create apollo client
const client = new ApolloClient({
  cache,
  link,
  // typeDefs,
  // resolvers,
  defaultOptions
});

// wait for cache to load before init
waitOnCache.then(() => {
  const rootElement = document.querySelector("#root");
  const AppBundle = (
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <Index />
      </ApolloProviderHooks>
    </ApolloProvider>
  );
  render(AppBundle, rootElement);
});

// register service worker
serviceWorker.register();
