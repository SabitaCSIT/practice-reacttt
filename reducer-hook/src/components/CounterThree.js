import React ,{useReducer} from 'react'

const initialState={val:0};
const reducer=(state,action)=>{
    var myState;
    switch(action.type){
        case 'Increment':
            myState = state + action.value
            return myState
        case 'Decrement':
            myState =  state - action.value
            return myState
        case 'Reset':
            return initialState

        default:
            return state
        
    }
}
function CounterThree() {
    const [count,dispatch]= useReducer(reducer,initialState)
    const [counttwo,dispatchTwo]= useReducer(reducer,initialState)

    return (
        <div>
            count-{count}
            
            <button onClick={()=>dispatch({type:'Increment',value:1})}>Increment</button>
            <button onClick={()=>dispatch({type:'Decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatch({type:'reset'})}>Reset</button><br/>
            counttwo-{counttwo}
            <button onClick={()=>dispatchTwo({type:'Increment',value:1})}>Increment</button>
            <button onClick={()=>dispatchTwo({type:'Decrement',value:1})}>Decrement</button>
            <button onClick={()=>dispatchTwo({type:'reset'})}>Reset</button>

        </div>
    )
}

export default CounterThree
