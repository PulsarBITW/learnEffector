import React, { FC, ReactNode } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routerDom";

type ProvidersProp = {
  children: ReactNode;
};

const Providers = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default Providers;
