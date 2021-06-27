import {useState} from "react";
import {createId} from "lib/createId";
const defaultTags = [
    {id:createId(), name:'衣'},
    {id:createId(), name:'食'},
    {id:createId(), name:'住'},
    {id:createId(), name:'行'}
]

const useTags = ()=>{
    const [tags,setTags] = useState<{id:number;name:string}[]>(defaultTags);
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
        const index = findTagIndex(id);
        // 神拷贝tags
        const TagsClone = JSON.parse(JSON.stringify(tags));
        // tagsClone的第index个删掉，换成id:number,obj:{name:string}
        TagsClone.splice(index,1,{id:id,name:obj.name});
        setTags(TagsClone)
    };
    return {
        tags:tags,
        setTags:setTags,
        findTag:findTag,
        updateTag:updateTag
    }
}
export default useTags;
// tag : string=> tag: {id:number,name:string}
