import Layout from "../components/Layout";
import React from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberpageSection} from "./Money/NumberTagSection";

const MyLayout = styled(Layout)`
        display:flex;
        flex-direction: column;
`
function Money() {
    // @ts-ignore
    return (
        <MyLayout className="hi">
            <TagsSection>
            </TagsSection>
            <NoteSection>

            </NoteSection>
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
        </MyLayout>
    );
};
export default Money;
