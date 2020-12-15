import React,{useEffect,useState} from 'react'

const PREFIX = 'codepen-clone-'
const useLocal = (key,initial) => {
    const prefixKey=PREFIX+key
    const [value,setValue]=useState(()=>{
        const jsonValue=localStorage.getItem(prefixKey)
        if(jsonValue!=null) return JSON.parse(jsonValue)
        if(typeof initial==='function'){
            return initial()
        } else {
            return initial
        }
    })
    useEffect(() => {
        localStorage.setItem(prefixKey, JSON.stringify(value))
      }, [prefixKey, value])
    return [value, setValue]
}
export default useLocal;
