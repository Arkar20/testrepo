import React ,{Component}from 'react';
import logo from './logo.svg';
import './App.css';
import Item from "./components/Item"
import Add from "./components/Add"
import { connect } from 'react-redux';

class App extends Component {

add=(name)=>{
 this.props.add(name)
}
remove=(id)=>{
  this.props.remove(id)
}

  
  render() {
    return (
      <>
        <h1>Revision Redux List</h1>
        
        <Item 
          key={this.props.data.id}
          item={this.props.data.map(i=>i)}
          remove={this.remove}
          />
          <Add add={this.add}/>
      </>
    );
  }
}
const stateToProps=(state)=>{
  return({
   data:state  
  })
}
const dispatchToProps=(dispatch)=>{
  return({
    add: (name)=>{
      dispatch({type:'ADD',data:{id:5,name,status:0}})
    }
  })
}
const ReduxApp = connect(stateToProps, dispatchToProps)(App); 
export default ReduxApp;
