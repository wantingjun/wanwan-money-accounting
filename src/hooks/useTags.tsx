import {useEffect, useRef, useState} from "react";
import {createId} from "lib/createId";
import {useUpdate} from "./useUpdate";


const useTags = ()=> {
    const [tags,setTags] = useState<{id:number;name:string}[]>([]);

    useEffect(()=>{
        //console.log('after mount')
        let localTags = JSON.parse(window.localStorage.getItem('tags') || '[]')
        // 如果长度为0，就是空，push预设值
        if(localTags.length ==0){
            localTags = [
                {id:createId(), name:'衣'},
                {id:createId(), name:'食'},
                {id:createId(), name:'住'},
                {id:createId(), name:'行'}
            ]
        }
        setTags(localTags)
    },[])// 组件挂载时执行
    useUpdate(()=>{
        console.log('set')
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },tags)

    const findTag = (id:number) =>tags.filter(tag=>tag.id === id)[0]
    const findTagIndex = (id:number)=>{
        let result = -1;
        for(let i =0;i<tags.length;i++){
            if(tags[i].id == id){
                result = i;
                break;
            }
        }
        return result
    };
    const updateTag =(id:number,obj:{name:string})=>{
        setTags(tags.map(tag=>tag.id === id? {id,name:obj.name} :tag))
    };
    const deleteTag=(id:number)=>{
        setTags(tags.filter(tag=>tag.id !== id))
    }
    const addTag=()=>{
        const tagName = window.prompt('新标签的名称为');
        if(tagName !== null  && tagName !== ''){
            setTags([...tags,{id:createId(),name:tagName}])
        }
    };
    const getName=(id:number)=>{ //根据id找tagName
        const tag = tags.filter(t=>t.id == id)[0]
        return tag ? tag.name : ''
    }
    return {
        tags:tags,
        setTags:setTags,
        findTag:findTag,
        updateTag:updateTag,
        deleteTag:deleteTag,
        addTag:addTag,
        getName:getName
    }
}
export default useTags;
// tag : string=> tag: {id:number,name:string}
