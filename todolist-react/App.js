import React, {useState} from 'react';
import Empty from './Empty';
import Todo from './Todo';
import './App.css';

function App() {
  //const header = 

  const [todo, setText] = useState([]);

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      onChange(handleKeyUp.target.value);
      console.log("enter");
    }
  }
  
  /*const Input = () => {
    const handleKeyUp = (event) => {
      if (event.key === 'Enter') {
        console.log('do validate');
      }
    }
  }*/

  const onChange = (text) => {
    setText([...todo, text.target.value]);
    console.log("text");
  }

  const renderedTodo = todo.map((text, index) => {
    return <Todo>{text}</Todo>
  });
  
  return (
    <div>
        <Empty />
        <div>{renderedTodo}</div>
        <form className="js-form">
            <input autoFocus type="text" aria-label="Enter a new todo item" placeholder="E.g. Build a web app" className="js-todo-input" onKeyUp={handleKeyUp}></input>
          </form>
    </div>
  );
}

export default App;
