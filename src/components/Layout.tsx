import Nav from "./Nav";
import React, {useEffect, useRef} from "react";
import styled from "styled-components";
import Icon from "./Icon";

const Wrapper = styled.div`

  height:100vh; //固定页面高度
  display:flex;
  flex-direction: column;
  
`
const Header = styled.header`
    //height:10vh;
    color:white;
    font-weight: bolder;
    background:#FF6F00;
    & div{
        display: flex;
        justify-content: center;
        align-items: center;
        line-height:56px;
        font-size:20px;
    }

`
const Main = styled.div`
  flex-grow:1;
  &::-webkit-scrollbar{
      display: none;
  }
`
type Props = {
    className?:string;
    scrollTop?:number;
}
const Layout:React.FC<Props>=(props)=>{
   const mainRef = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        setTimeout(()=>{
            if(!mainRef.current) {return ;}
            //console.log(props.scrollTop)
            mainRef.current.scrollTop = props.scrollTop! ;
            //console.log(mainRef.current.scrollTop)
        },0)
    },[props.scrollTop])
    return (
        <Wrapper>
            <Header>
                <div>wanwan记账</div>
            </Header>
            <Main ref={mainRef} className={props.className}>
                {props.children}
            </Main>
            <Nav/>
        </Wrapper>
    )
}
Layout.defaultProps ={
    scrollTop:0
}
export default Layout
