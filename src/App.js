import { ApolloProvider } from "@apollo/client";
import React from "react";
import client from "src/config/graphql";
import AppRouter from "src/router";
import AuthContextProvider from "./utils/provider/AuthContextProvider";

const App = () => (
  <ApolloProvider client={client}>
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  </ApolloProvider>
);

export default App;
