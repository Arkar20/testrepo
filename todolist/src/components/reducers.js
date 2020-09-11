import {Provider} from 'react-redux'
import {createStore} from "redux"

export const store=createStore((state=[],action)=>{
    if(action.type==="ADD")
          return [...state,action.data]
    if(action.type==="REMOVE")
          return state.filter(i=> i.id !== action.id)

    if(action.type=="TOGGLE")
        return state.map( i =>{
            if(i.id === action.id){
                  i.status =+! i.status
            }
            
            return i
        })
    return state

})