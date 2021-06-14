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

function App() {
  return (
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
  );
}
function NoMatch(){
  return (
      <div>
        页面不存在
      </div>
  )
}
function Statistics() {
  return (
<Layout>
  <h2>统计页面</h2>
</Layout>


  );
}

function Tags() {
  return (
      <Layout>
        <h2>标签页</h2>
      </Layout>

  );
}

function Money() {
  return (
      <Layout>
        <h2>记账页</h2>
      </Layout>
  );
}
export default App
