// other
import React from "react";
import { render } from "react-dom";
import * as serviceWorker from "./configs/serviceWorker";

//apollo
import { concat } from "apollo-link";
import { RetryLink } from "apollo-link-retry";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "react-apollo";
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

const defaultOptions = {
  watchQuery: {
    // fetchPolicy: "cache-and-network",
    // errorPolicy: "ignore"
  },
  query: {
    fetchPolicy: "cache-and-network"
    // errorPolicy: "all"
  },
  mutate: {
    // errorPolicy: "all"
  }
};

// create apollo client
const client = new ApolloClient({
  cache,
  link,
  typeDefs,
  resolvers,
  defaultOptions
});

//init cache

const cacheInitData = {
  data: {
    selectedStudent: "No Student Selected",
    modals: [
      {
        id: "createStudent",
        isOpen: false,
        __typename: "Modal"
      },
      {
        id: "editStudent",
        isOpen: false,
        __typename: "Modal"
      },
      {
        id: "editStudentDegree",
        isOpen: false,
        __typename: "Modal"
      },
      {
        id: "editStudentCourses",
        isOpen: false,
        __typename: "Modal"
      }
    ]
  }
};
cache.writeData(cacheInitData);

// notes for nuking store
// client.clearStore();
// client.resetStore();
// client.onResetStore(() => cache.writeData({ cacheInitData }));

// wait for cache to load before init
waitOnCache.then(() => {
  const rootElement = document.querySelector("#root");
  const AppBundle = (
    <ApolloProvider client={client}>
      <Index />
    </ApolloProvider>
  );
  render(AppBundle, rootElement);
});

// register service worker
serviceWorker.register();
