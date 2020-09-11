import React from "react";

const Add= ({add})=>{
 let nameref=React.createRef();

    return (
        <>
             <input type="text" ref={nameref}/>
          <button onClick={()=>add(nameref.current.value)}>Click Me</button>
        </>
    )
}
export default Add;