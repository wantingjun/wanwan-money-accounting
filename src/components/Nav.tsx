import styled from "styled-components";
import { NavLink} from "react-router-dom";
import React from "react";
import Icon from "./Icon";
// import x from 'icons/money.svg'; //svg-loader--svg-sprite-loader
//import y from 'icons/tag.svg'; //svg-loader--svg-sprite-loader


// console.log(x,y);

const NavWrapper = styled.nav`
box-shadow:0 0 3px rgba(0,0,0,0.25);
line-height:24px;
> ul {
  display:flex;
  > li {
    width:33.3333%;
    text-align:center;
    > a{
     display:flex;
     padding:4px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
      .icon {
      width:24px;
      height:24px;
    }
      &.selected{
        color:red;
        .icon {
           fill:red;
        }
    }
    }
  }
}
`
const X=()=>{
    return (
        <NavWrapper>
            <ul>
                <li>
                    <NavLink
                        to="/tags" activeClassName="selected">
                        <Icon name="tag"/>标签页</NavLink>
                </li>
                <li>

                    <NavLink to="/money" activeClassName="selected"><Icon name="money"/>记账</NavLink>
                </li>
                <li>

                    <NavLink to="/statistics" activeClassName="selected"><Icon name="chart"/>统计页</NavLink>
                </li>
            </ul>
        </NavWrapper>
    )
}
export default X;
