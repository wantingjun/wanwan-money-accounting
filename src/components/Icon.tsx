import React from "react";
// require('icons/money.svg')
// require('icons/tag.svg')
// require('icons/chart.svg')
//require一个目录/文件夹
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}


type Props = {
    name?:string
}
const Icon =(props:Props)=>{
    return (
        <svg fill='red' className="icon">
            {props.name && <use xlinkHref={'#'+props.name}></use>}
        </svg>
    )
};
export default Icon
