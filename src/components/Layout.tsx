import Nav from "./Nav";
import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid red;
  height:100vh; //固定页面高度
  display:flex;
  flex-direction: column;
  
`
const Main = styled.div`
flex-grow:1;
`

const Layout=(props:any)=>{
    console.log(props)
    return (
        <Wrapper>
            <Main>
                {props.children}
            </Main>
            <Nav></Nav>
        </Wrapper>
    )
}
export default Layout
