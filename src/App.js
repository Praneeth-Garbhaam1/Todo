
import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    name: '',
    todolist: [],
    disabled: true,
  }

  onAddInputText = (e) => {
    this.setState({
      name: e.target.value,
    })
  }

  onAddToList = () => {
    if (this.state.name) {
      this.setState(prevState => ({
        todolist: prevState.todolist.concat(prevState.name),
        name:''
      }));
    }
  }

  onRemoveItem = (index) => {
    this.state.todolist.splice(index, 1);
    this.setState(prevState => ({
      todolist: prevState.todolist
    }));
  }


  render(){
    return(
      <div className="listapp">
        <h1>To Do List</h1>
        <input type="text" value={this.state.name} onChange={this.onAddInputText} disabled={!this.state.disabled}/>
        <button onClick={this.onAddToList}>Add Item</button><br></br>
        <ul>
          {
            this.state.todolist.filter(item => item.includes(this.state.name)).map((item,index)=>{
              return (
                <li key={index}>
                
                  <span id="items" onClick={()=>this.onRemoveItem(index)}>{item}<i class="fa fa-times-circle"></i></span>
              
                
                </li>
              )
            })
          }
          </ul>

      </div>
    )
  }
}

export default App;





