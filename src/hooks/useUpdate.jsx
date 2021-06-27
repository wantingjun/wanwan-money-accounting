import {useEffect, useRef} from "react";

const useUpdate=(fn:()=>void,dependency:any[])=> {
    const count = useRef(0)
    useEffect(() => {
        count.current += 1;
    })
    useEffect(() => {
        if (count.current > 1) {
        fn()
        }
    }, [fn,dependency]) //tags必须是不可变值，每次修改是一个新的对象，在【tags】变化的时候执行
}
export {useUpdate}
