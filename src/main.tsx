import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import App from "./App";
//import { BrowserRouter } from "react-router-dom";
//import { RouterProvider } from "react-router-dom";
//import router from "./components/Pages/routes.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//<RouterProvider routerOne={router}></RouterProvider>
