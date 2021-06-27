import React from "react";
import CS from 'classnames';
let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('icons', true, /\.svg$/));} catch (error) {console.log(error);}

//自己的prop+ SVG提供的属性
type Props = {
    name?:string
} & React.SVGAttributes<SVGElement>
const Icon =(props:Props)=>{
    const {name,children,className,...rest} = props;
    return (
        <svg  className={CS('icon',className)} {...rest}>
            {props.name && <use xlinkHref={'#'+props.name}></use>}
        </svg>
    )
};
export default Icon
