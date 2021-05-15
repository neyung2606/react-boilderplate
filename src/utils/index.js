import { Route } from "react-router-dom";
import LazyComponent from "src/components/lazyComponent";
import client from "src/config/graphql";
import React from "react";

const queryData = async (query, variable) => {
  const data = await client.query({
    query,
    variables,
    fetchPolicy: "no-cache",
  });
  return data;
};

const mutationData = async (mutation, variable) => {
  const data = await client.mutate({
    mutation,
    variables,
  });
  return data;
};

const renderRouteList = (routes) =>
  Object.entries(routes).map(([key, route]) => {
    const { page, ...rest } = route;
    return (
      <Route
        key={key}
        {...rest}
        render={() => {
          return <LazyComponent component={page} />;
        }}
      />
    );
  });

export { queryData, mutationData, renderRouteList };
