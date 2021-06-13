import React from "react";
import styled from "styled-components";
import Nav from "./components/Nav";
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
flex-grow:1;
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
          <Nav></Nav>



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
