import styled from "styled-components";
import React, {useState} from "react";
import Wrapper from "./NumberPagSection/Wrapper";
import {generateOutput} from "./NumberPagSection/generateOutput";
import {setState} from "jest-circus/build/state";
type Props= {
    value: number,
    onChange: (value: number) => void;
    onOk?:()=>void;
}
const NumberpageSection:React.FC<Props> =(props)=>{
    //const [output,_setOutput]= useState('0');
    const [output, _setOutput]= useState(props.value.toString())
    const setOutput= (output:string)=>{
        let newOutput
        if(output.length > 16){
            newOutput= output.slice(0,16)
        }
        else if(output.length === 0){
            newOutput = 0
        }
        else{
            newOutput = output
        }
        _setOutput(newOutput)
       // console.log(output,newOutput)
        props.onChange(parseFloat(newOutput))
    }
    const onClickButtonWrapper=(e:React.MouseEvent)=>{
        const text = (e.target as HTMLButtonElement).textContent;
        if(text === null){return ;}
        if(text === 'ok'){
            //todo
            if( props.onOk){
                props.onOk()
            }

            return ;
        }
        if('0123456789.'.split('').concat(['删除','清空']).indexOf(text)>=0){
            setOutput(generateOutput(text,output))
        }

    }
    return (
        <Wrapper>
            <div className="output">{output}</div>
            <div className="pad clearfix" onClick={onClickButtonWrapper}>
                <button >1</button>
                <button >2</button>
                <button >3</button>
                <button>删除</button>
                <button >4</button>
                <button >5</button>
                <button>6</button>
                <button >清空</button>
                <button >7</button>
                <button >8</button>
                <button >9</button>
                <button className="ok">ok</button>
                <button className="zero">0</button>
                <button className="dot">.</button>

            </div>
        </Wrapper>
    )
}
export {NumberpageSection}
