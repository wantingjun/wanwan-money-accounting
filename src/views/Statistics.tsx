import Layout from "../components/Layout";
import React, {useState} from "react";
import {CategorySection} from "./Money/CategorySection";
import styled from "styled-components";
import {RecordItem,useRecords} from "../hooks/useRecords";
import useTags from "../hooks/useTags";
import day from 'dayjs'

const CategoryWrapper= styled.div`
  background: #FF6F00;
`
const Item = styled.div`
    display:flex;
    justify-content: space-between;
    background:white;
    font-size:18px;
    line-height:20px;
    padding:10px 16px;
    > .note{
       margin-right:auto;
       margin-left:16px;
       color:#999
    }
   
`
const Header= styled.h3`
  font-size:18px;
  line-height:20px;
  padding:10px 16px;
`
function Statistics() {
    const [category,setCategory] = useState<'-'|'+'>('-')
    const {records} = useRecords();
    const {getName} = useTags()
    const selectedRecords =  records.filter(r=>r.category === category)
    const hash: {[k:string]:RecordItem[]} = {}
    selectedRecords.forEach(r=>{
        const key = day(r.createdAt).format('YYYY年MM月DD日')
        if(hash[key] === undefined){
            hash[key] = []
        }
        hash[key].push(r)
    })
    //console.log(hash)
    // console.log(Object.entries(hash)) //hash转为数组
    const arr = Object.entries(hash).sort((a,b)=>{
        if(a[0] === b[0]){
            return 0
        }
        if(a[0] > b[0]){
            return -1
        }
        if(a[0] < b[0]){
            return 1
        }
        return 0
    })
    console.log(arr)
    return (
        <Layout>
            <CategoryWrapper>
            <CategorySection value={category} onChange={value=>setCategory(value)}/>
            </CategoryWrapper>
            {arr.map(([date,records])=><div>
                <Header>
                    {date}
                </Header>
                <div>
                    {records.map(r=>{
                        return <Item key={r.createdAt}>
                            <div className='tags oneLine'>
                                {r.tagIds.map(tagId=><span key={{tagId}}>{getName(tagId)}</span>)
                                    .reduce((result,span,index,array)=>
                                        result.concat(index<array.length -1 ? [span,'，']:[span]),[] as ReactNode)
                                }
                            </div>
                            {r.note && <div className="note">{r.note}</div>}
                            <div className="amount">
                                ¥{r.amount}
                            </div>
                        </Item>
                    })}
                </div>
            </div>)}
            <div>

            </div>
        </Layout>


    );
};
export default Statistics
