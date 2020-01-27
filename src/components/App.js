import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "typeface-roboto";
import Container from "@material-ui/core/Container";

import List from "./modules/List";
import Detail from "./modules/Detail";

export default function App() {
  return (
    <Container maxWidth="md">
      <BrowserRouter>
        <Route exact path="/" component={List} />
        <Route path="/:id" component={Detail} />
      </BrowserRouter>
    </Container>
  );
}
