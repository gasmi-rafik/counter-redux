import React from 'react'
import {INCREMENT , DECREMENT} from '../action/actionTypes'
const intialState ={
    counter : 0
}
const reducer = (state = intialState , action) => {
  switch(action.type){
        case INCREMENT :
            return {...state , counter:state.counter +1}
        case DECREMENT :
            return {...state , counter:state.counter -1}
            default :
            return state

  }
}

export default reducer