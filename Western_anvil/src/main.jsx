import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { UserContextProvider } from "./Context/AuthContext";
import { DBContextProvider } from "./Context/dbContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { podcastApi } from "./Features/ApiSlice";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserContextProvider>
      <DBContextProvider>
        <ThemeContextProvider>
          <ApiProvider api={podcastApi}>
              <App />
          </ApiProvider>
        </ThemeContextProvider>
      </DBContextProvider>
    </UserContextProvider>
  </BrowserRouter>
);
