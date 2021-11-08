import React,{useReducer} from 'react'

const initialState={firstName:0,lastName:10}
const reducer = (state,action)=>{
    switch(action.type){
        case 'Increment':
            return {firstName:state.firstName+action.value}
        case 'Decrement':
            return {firstName:state.firstName-action.value}
        case 'Increment2':
            return {firstName:state.lastName+action.value}
        case 'Decrement2':
            return {firstName:state.lastName-action.value}
        case 'Reset':
            return initialState.firstName
        default:
            return state
    }
}
function CounterTwo() {
    const [state,dispatch]= useReducer(reducer,initialState)
    return (
        <div>
            count-{state.firstName}
            <button onClick={()=>dispatch({type:'Increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'Decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'Increment',value:5})}>Increment5</button>
            <button onClick={()=>dispatch({type:'Decrement',value:5})}>Decrement5</button>
            <button onClick={()=>dispatch({type:'Increment',value:1})}>Increment2</button>
            <button onClick={()=>dispatch({type:'Decrement',value:1})}>Decrement2</button>
            <button onClick={()=>dispatch({type:'Reset'})}>Reset</button>
            


        </div>
    )
}

export default CounterTwo
