import React,{useRef,useEffect} from 'react'

function FocusInput() {
    const input = useRef()
    useEffect(()=>{
        input.current.focus()
    },[])
    return (
        <div>
            <input ref={input} type="text" />
        </div>
    )
}

export default FocusInput
