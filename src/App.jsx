import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cbpm } from "./screens/Cbpm";
import { CbpmScreen } from "./screens/CbpmScreen";
import { DivWrapper } from "./screens/DivWrapper";
import { Screen3 } from "./screens/Screen3";
import { Screen4 } from "./screens/Screen4";
import { Screen5 } from "./screens/Screen5";
import { Screen6 } from "./screens/Screen6";
import { Screen7 } from "./screens/Screen7";
import { Screen8 } from "./screens/Screen8";
import { Screen9 } from "./screens/Screen9";
import { Screen10 } from "./screens/Screen10";
import { Screen11 } from "./screens/Screen11";
import { Screen12 } from "./screens/Screen12";
import { Screen13 } from "./screens/Screen13";
import { Screen14 } from "./screens/Screen14";
import { Screen15 } from "./screens/Screen15";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <Screen6 />,
  },
  {
    path: "/cbpm-16",
    element: <Cbpm />,
  },
  {
    path: "/cbpm-15",
    element: <CbpmScreen />,
  },
  {
    path: "/cbpm-14",
    element: <DivWrapper />,
  },
  {
    path: "/cbpm-13",
    element: <Screen3 />,
  },
  {
    path: "/cbpm-6",
    element: <Screen4 />,
  },
  {
    path: "/cbpm-02",
    element: <Screen5 />,
  },
  {
    path: "/cbpm-1",
    element: <Screen6 />,
  },
  {
    path: "/cbpm-3",
    element: <Screen7 />,
  },
  {
    path: "/cbpm-5",
    element: <Screen8 />,
  },
  {
    path: "/cbpm-4",
    element: <Screen9 />,
  },
  {
    path: "/cbpm-12",
    element: <Screen10 />,
  },
  {
    path: "/cbpm-11",
    element: <Screen11 />,
  },
  {
    path: "/cbpm-10",
    element: <Screen12 />,
  },
  {
    path: "/cbpm-09",
    element: <Screen13 />,
  },
  {
    path: "/cbpm-08",
    element: <Screen14 />,
  },
  {
    path: "/cbpm-07",
    element: <Screen15 />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};
