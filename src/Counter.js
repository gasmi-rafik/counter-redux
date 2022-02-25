import React ,{useState} from 'react'
import {connect} from 'react-redux'
import {increment , decrement } from './redux/action/action'
const Counter = ({count , plus , minus}) => {
   
  return (
    <div>
       <button onClick={()=>plus()}>+</button>
       <span>{count}</span>
       <button onClick={()=>minus()}>-</button>
    </div>
  )
}
const mapStateToProps =(state)=>{
    return {
        count : state.counter
    }
}

const mapDispatchToProps=(dispatch)=>{
      return {
          plus : ()=>dispatch(increment()) ,
          minus :()=>dispatch(decrement())
      }
}

export default connect( mapStateToProps ,mapDispatchToProps ) (Counter)