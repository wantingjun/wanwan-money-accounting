import React from "react";
import styled from "styled-components";
import Nav from "components/Nav";
import Layout from "components/Layout";

import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Statistics from "views/Statistics";
import Money from "views/money";
import Tags from "views/tags"
import NoMatch from "views/NoMatch"


const AppWrapper = styled.div`
  color:#333;
`
function App() {
  return (
      <AppWrapper>
      <Router>
            <Switch >
              <Route path="/tags">
                <Tags />
              </Route>
              <Route path="/money">
                <Money />
              </Route>
              <Route path="/statistics">
                <Statistics />
              </Route>
              <Redirect exact from='/' to='/money'></Redirect>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      </Router>
      </AppWrapper>
  );
}






export default App
