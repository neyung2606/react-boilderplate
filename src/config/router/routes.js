export const restrictedRoutes = {
  login: {
    page: "login",
    exact: true,
    path: "/login",
  },
};

export const publicRoute = {};

export const protectedRoute = {
  dashboard: {
    page: "dashboard",
    exact: true,
    path: "/dashboard",
  },
};
