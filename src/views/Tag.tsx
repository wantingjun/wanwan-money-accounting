import React from 'react'
import useTags from "hooks/useTags";
import {useParams,useHistory} from 'react-router-dom'
import Layout from "components/Layout";
import Icon from "../components/Icon";
import {Button} from "../components/Button";
import styled from "styled-components";
import Input from "../components/Input";
import Center from "components/Center";
import {Space} from "../components/Space";

type Params={
    id:string
}
const Topbar = styled.header`
  display:flex;
  justify-content: space-between;
  align-items: center;
  line-height:20px;
  padding:14px;
  background: white;
`
const InputWrapper = styled.div`
  background:white;
  padding:0 16px;
  margin-top:8px;
`

const Tag: React.FC = (props)=>{
    const {findTag,updateTag,deleteTag} = useTags()
    let {id:idString} = useParams<Params>() //路由传过来的id，重命名为idString
    const tag = findTag(parseInt(idString)) //根据idString寻找tag，tag是一个对象，包括id和name
    const tagContent= (tag:{id:number,name:string})=> (<div>
        <InputWrapper>
            <Input label="标签名" type="text" placeholder="标签名"
                   value={tag.name}
                   onChange={(e)=>{
                       updateTag(tag.id,{name:e.target.value})
                   }}
            ></Input>
        </InputWrapper>
        <Center>
            <Space/>
            <Space/>
            <Button onClick={()=> deleteTag(tag.id)}>删除标签</Button>
            <Space/>
            <Space/>
        </Center>
    </div>
    )
    const history = useHistory()
    const onClickBack=()=>{
        history.goBack()
    }

        return (
            <Layout>
                <Topbar>
                    <Icon name="left" className='frank' onClick={onClickBack}/>
                    <span>编辑标签</span>
                    <Icon/>
                </Topbar>
                {tag ?  tagContent(tag) : <Center>tag不存在</Center>}

            </Layout>
        )


}
export default Tag
