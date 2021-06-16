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
            <CategorySection/>
            <NumberpageSection/>
        </MyLayout>
    );
};
export default Money;
