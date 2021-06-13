import React from "react";
import styled from "styled-components";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
const Wrapper = styled.div`
  border: 1px solid red;
  height:100vh; //固定页面高度
  display:flex;
  flex-direction: column;
  
`
const Main = styled.div`
border:1px solid green;
flex-grow:1;
`
const Nav = styled.nav`
border:1px solid blue;
> ul {
  display:flex;
  > li {
    width:33.3333%;
    text-align:center;
    padding:16px;
  }
}
`

function App() {
  return (
      <Router>
        <Wrapper>
          <Main>
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
          </Main>

          <Nav>
            <ul>
              <li>
                <Link to="/tags">标签页</Link>
              </li>
              <li>
                <Link to="/money">记账</Link>
              </li>
              <li>
                <Link to="/statistics">统计页</Link>
              </li>
            </ul>
          </Nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}

        </Wrapper>
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
  return <h2>统计页面</h2>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}
export default App
