import React from "react";
import { connect } from "react-redux";

const Item=({item,remove,toggle})=>{
  
    return (
        <ul>
        {
          item.map(item=> (
          <li>
              <input type="checkbox" 
                    checked={item.status}
                    onChange={()=>toggle(item.id)}
                    />
              {item.name}
              -status({item.status})
          <button onClick={()=>remove(item.id)}>&times;</button>
          </li>
            )
          )
        }
        </ul>
    )
}
const dispatchToProps=(dispatch)=>{
  return({
    remove : (id)=>{
      dispatch({type:'REMOVE',id})
    },
    toggle : (id)=>{
      dispatch({type:'TOGGLE',id})
    },

  })
}
export default connect(null, dispatchToProps)(Item); 
