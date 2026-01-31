import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import AppWrapper from "./AppWrapper.jsx";

export const Context = createContext({
  isAuthorized: false,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppWrapper />
  </React.StrictMode>
);
