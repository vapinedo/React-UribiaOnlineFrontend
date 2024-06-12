import React from "react";
import AppRouter from "@app/routes/AppRouter";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <React.Fragment>
        <BrowserRouter basename="/React-UribiaOnlineFrontend">
          <AppRouter />
        </BrowserRouter>
    </React.Fragment>
  );
}
