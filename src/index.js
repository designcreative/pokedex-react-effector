import * as React from "react";
import { render } from "react-dom";

import App from "./App";
import { BrowserRouter } from "react-router-dom";

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

render(app, document.getElementById("root"));
