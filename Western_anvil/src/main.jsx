import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { UserContextProvider } from "./Context/AuthContext";
import { DBContextProvider } from "./Context/dbContext";
import { ThemeContextProvider } from "./Context/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserContextProvider>
      <DBContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </DBContextProvider>
    </UserContextProvider>
  </React.StrictMode>
);
