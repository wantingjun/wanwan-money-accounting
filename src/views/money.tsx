import Layout from "../components/Layout";
import React, {useState} from "react";
import styled from "styled-components";
import {TagsSection} from "./Money/TagsSection";
import {NoteSection} from "./Money/NoteSection";
import {CategorySection} from "./Money/CategorySection";
import {NumberpageSection} from "./Money/NumberTagSection";

const MyLayout = styled(Layout)`
        display:flex;
        flex-direction: column;
`
type Category='-' |'+'
function Money() {
    const [selected,setSelected] =useState({
        tagIds:[] as number[],
        note:'',
        category:'-' as Category,
        amount:0
    })
    type Selected = typeof selected
    const onChange =(obj:  Partial<Selected>)=>{
        setSelected({
            ...selected,
            ...obj
        })
    }
    // @ts-ignore
    return (
        <MyLayout className="hi">
            {selected.note}
            <TagsSection value={selected.tagIds} onChange={(tagIds)=>onChange({tagIds})}/>
            <NoteSection value={selected.note} onChange={(note)=>onChange({note})}/>
            <CategorySection value={selected.category} onChange={(category)=>onChange({category})}/>
            <NumberpageSection value={selected.amount}
                               onChange={(amount)=>onChange({amount})}
                                onOk={()=>{}}
            />
        </MyLayout>
    );
};
export default Money;
