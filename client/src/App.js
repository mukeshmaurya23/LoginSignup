import React, { useEffect } from "react";
import Login from "./components/pages/Login";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./components/pages/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Error from "./components/pages/Error";
import MainContainer from "./components/pages/MainContainer";
import Home from "./components/pages/Home";

const myRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainContainer />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Signup />,
      },
      {
        path: "/home",
        element: <Home />,
      },
    ],

    // children: [
    //   {
    //     path: "/",

    //   },
    //   {
    //     path: "/register",
    //     element: <Signup />,
    //   },
    // ],
  },
]);
const App = () => {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <RouterProvider router={myRouter}></RouterProvider>
    </>
  );
};

export default App;
