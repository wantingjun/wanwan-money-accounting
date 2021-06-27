import React from "react";
import styled from "styled-components";
const Label = styled.label`
      display: flex;
      align-items:center;
      > span{
          margin-right:16px;
          white-space:nowrap;
      }
      > input{
          display:block;
          width: 100%;
          height:72px;
          border:none;
          background: none;
      }
`
type Props={
    label:string;
    //ref:any;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input:React.FC<Props> =(props )=>{
    const {label, children,...rest} = props;
    return (
        <Label>
            <span>{props.label}</span>
            {/*<input type={props.type} placeholder={props.placeholder}*/}
            {/*       // ref={refInput}*/}
            {/*        defaultValue={props.defaultValue}*/}
            {/*        onBlur={props.onBlur}*/}
            {/*/>*/}
            <input {...rest}/>
        </Label>
    )
}
export {Input}
