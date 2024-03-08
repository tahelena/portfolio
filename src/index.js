import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App";

import { NavigationProvider } from "./context/navigation";
import { store } from "./store";

import "bulma/css/bulma.css";
import "./styles/index.css";
import "./styles/styles.css";
import { BooksProvider } from "./context/books";

const root = createRoot(document.getElementById("root"));
root.render(
  <BooksProvider>
    <Provider store={store}>
      <NavigationProvider>
        <App />
      </NavigationProvider>
    </Provider>
  </BooksProvider>
);
