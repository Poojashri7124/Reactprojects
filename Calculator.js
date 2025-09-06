import ReactDOM from 'react-dom/client';
import React,{ useReducer } from "react";
const reducer = (state, action)=>{
  switch (action.type){
    case "increment":
      return{count: state.count +1};
    case "decrement":
      return{count: state.count -1};
      case "reset":
        return {count : 0};
      default:
        return state;
  }
};
function Counter(){
  const [state, dispatch] = useReducer(reducer, {count : 0});
  return(
    <div classname="d1">
      <h2 classname="d2">COUNT:{state.count}</h2>
      <div classname="d3">
        <button 
        onclick={()=>dispatch({type:"increment"})}
        classname="b1">+
        </button>
        <button 
        onclick={()=>dispatch({type:"decrement"})}
        classname="b2">-
        </button>
        <button 
        onclick={()=>dispatch({type:"reset"})}
        classname="b3">RESET
        </button>
      </div>
    </div>
  );
}