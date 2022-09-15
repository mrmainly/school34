import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Layout from "./layout";
import { Home } from "./pages";
import ROUTES from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
