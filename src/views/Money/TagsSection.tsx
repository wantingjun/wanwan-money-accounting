import styled from "styled-components";
import React, {useState} from "react";
import useTags from "../../useTags";
import {createId} from "../../lib/createId";

const  Wrapper = styled.section`
    background: #ffffff;
    padding:12px 16px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    > ol {
        margin:0 -12px;
        > li{
            background: #d9d9d9;
            border-radius:18px;
            display: inline-block;
            padding:3px 18px;
            font-size:14px; 
            margin:8px 12px;
            &.selected{
              background: #f60;
            }
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
type Props={
    value:number[];
    onChange:(selected:number[])=>void;
}
//类型React.FunctionComponent,间歇React.FC
const  TagsSection:React.FunctionComponent<Props>=(props)=>{
    console.log(props)
    const {tags, setTags} = useTags()
    const selectedTagIds= props.value;
    const onAddTag=()=>{
        const tagName = window.prompt('新标签的名称为');
        if(tagName !== null){
            setTags([...tags,{id:createId(),name:tagName}])
        }
    };
    const onToggleTag=(tagId:number)=>{
        const index = selectedTagIds.indexOf(tagId);
        if(index>=0){ //如果tag已被选中，就复制所有没有被选中的tag，作为新的selectedTags
            // 不能直接改selectedTags
            props.onChange(selectedTagIds.filter(t=> t!==tagId))
        }
        else{//否则，新的tag加上之前的selectedTags，组成新的selectedTags
            props.onChange([...selectedTagIds,tagId])
        }
    }
    const getClass= (tagId:number)=>selectedTagIds.indexOf(tagId) >=0 ? 'selected' : '';
    return (
            <Wrapper>
                <ol>
                    {tags.map(tag=>
                    <li key={tag.id}
                        onClick={()=>{onToggleTag(tag.id)}}
                        className={getClass(tag.id)}>
                         {tag.name}
                    </li>
                    )}
                </ol>
                <button onClick={onAddTag}> 新增标签</button>
            </Wrapper>
    )
}



export {TagsSection}
