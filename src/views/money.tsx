import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";

const  TagsSection = styled.section`
    background: #ffffff;
    border:1px solid red;
    padding:12px 16px;
    > ol{
        margin:0 -12px;
        > li{
            background: #d9d9d9;
            border-radius:18px;
            display: inline-block;
            padding:3px 18px;
            font-size:14px;
            margin:8px 12px;
        }
    }
    > button{
        background: none;
        border:none;
        border-bottom:1px solid;
        padding: 2px 4px; 
        color:#666;
        margin-top: 6px;
    }
`
const  NotesSection = styled.section`
    background: #f5f5f5;
    padding:0 16px;
    font-size:14px;
    > label {
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
    }
`
const  CategorySection = styled.section`
    font-size:24px;
    > ul{
      display: flex;
      background: #c4c4c4;
      > li {
      width:50%;
      text-align:center;
      padding:16px 0;
      position:relative;
      &.selected::after{
      content:'';
      display:block;
      height:3px;
      position:absolute;
      background:#333;
      bottom:0;
      width:100% ;
      left:0;     
      }
      }
    }
`
const  NumberpageSection = styled.section`
    display: flex;
    flex-direction: column;
    > .output{
        background: white;
        font-size:36px;
        line-height:72px;
        text-align: right;
        padding:0 16px;
        box-shadow:inset 0 -5px 5px -5px rgba(0,0,0,0.25),inset 0 5px 5px -5px rgba(0,0,0,0.25);
    }
    > .pad{
      > button{
        font-size:18px;
        float:left;
        width:25%;
        height:64px;
        border:none;
        &.ok{
        height: 128px;
        float: right;
        }
        &.dot{
          width:50%;
        }
        &:nth-child(1){
          background: #f2f2f2;
        }
        &:nth-child(2),
        &:nth-child(5){
          background: #e0e0e0;
        }
        
        &:nth-child(3),
        &:nth-child(6),
        &:nth-child(9){
          background: #d3d3d3;
        }
        &:nth-child(4),
        &:nth-child(7),
        &:nth-child(10){
          background: #c1c1c1;
        }
        &:nth-child(8),
        &:nth-child(11),
        &:nth-child(13){
          background: #b8b8b8;
        }
        &:nth-child(12){
          background: #a9a9a9;
        }
        &:nth-child(14){
          background: #9a9a9a;
        }
 
      }
    }

`

function Money() {
    return (
        <Layout>
            <TagsSection>
                <ol>
                    <li>衣</li>
                    <li>食</li>
                    <li>住</li>
                    <li>行</li>
                </ol>
                <button>新增标签</button>
            </TagsSection>
            <NotesSection>
                <label>
                <span>备注</span>
                <input type="text" placeholder="在这里添加属性"/>
                </label>
            </NotesSection>
            <CategorySection>
                <ul>
                    <li className="selected">收入</li>
                    <li>支出</li>
                </ul>
            </CategorySection>
            <NumberpageSection>
                <div className="output">100</div>
                <div className="pad clearfix">
                    <button>1</button>
                    <button>2</button>
                    <button>3</button>
                    <button>删除</button>
                    <button>4</button>
                    <button>5</button>
                    <button>6</button>
                    <button>清空</button>
                    <button>7</button>
                    <button>8</button>
                    <button>9</button>
                    <button className="ok">ok</button>
                    <button className="zero">0</button>
                    <button className="dot">.</button>

                </div>
            </NumberpageSection>
        </Layout>
    );
};
export default Money;
