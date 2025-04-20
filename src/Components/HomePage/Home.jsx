import { useState } from "react";


import './Home.css'
export default function HomePage() {
  const [inputField, setInputField] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [currBtn, setBtn] = useState(true);
  const [setId, UpdateId] = useState(null); 
  const [task , updatedTsk] = useState(true);

  const handleInput = (value) => {
    setInputField(value)
  }

  const inputHandle = () => {
    if (inputField.trim() != "" && !todoList.includes(inputField)) { 
      
      const newArray = {
        id: new Date().getTime().toString(),
        name: inputField

      }
      setTodoList((prev) => [...prev, newArray])

    }
    setInputField("") 
    updatedTsk(true)


  }
  const DeleteDoc = (id) => {
    setTodoList(todoList.filter((each) => each.id !== id))

  }

  const EditField = (id) => {
    const finding = todoList.find((each) => each.id == id)
    setInputField(finding.name);
    UpdateId(id)
    setBtn(false) 
    updatedTsk(false)


  }

  const EditHandle = () => {
    const updatedTodos = todoList.map((each) =>
      each.id === setId ? { ...each, name: inputField } : each
    );
    setTodoList(updatedTodos);
    setInputField("");
    UpdateId(null);
    setBtn(true);
  };

  const TaskDone = () => {
     updatedTsk(false);
  }


  return (
    <>
      <div className="main_div">
        <div className="small-div">
          <h1 className="task">Task Tracker</h1>
          <div className="input_div">
            <div>
              <input
                type="text"
                className="input_bar"
                value={inputField || ""}
                onChange={(e) => handleInput(e.target.value)}
              />
            </div>
            <div>
              {currBtn ? <button className="Add-btn" onClick={() => inputHandle()}>Add Your Task</button> : <button className="Add-btn" onClick={() => EditHandle()}>Edit Your Task</button>}
            </div>


          </div>
          <ul>
            {todoList.map((item) => {
              return (
                <div key={item.id}>
                  <div className="List_dec"> 
                    <div className="list-div" >
                      
                    <li className= {task ? "li-tex" : "new-input"}>{item.name}</li>  
                    </div>
                    <div className="btn-cont">
                    <button  className="EditBtn" onClick={() => EditField(item.id)}>Edit</button>
                    <button className="DelBtn" onClick={() => DeleteDoc(item.id)}>Delete</button> 
                    <button className="DoneBtn" onClick={() => TaskDone(item.id)}>Done!</button> 
                    </div>
                  </div>
                </div>
              );
            })}

          </ul>
        </div>

      </div>

    </>
  );
}








