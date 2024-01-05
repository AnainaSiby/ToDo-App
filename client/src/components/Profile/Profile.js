import { useEffect, useState } from "react";
import "./Profile.css";
import AXIOS from 'axios'

export default function Profile() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [todos,setTodos] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = "http://localhost:9000/api/addtodo"
    AXIOS.post(url,{title,desc}).then((res)=>{
      alert(res.data.message)
      setTitle("")
      setDesc("")
    })
  };

  useEffect(()=>{
    const url = "http://localhost:9000/api/todo"
    AXIOS.get(url).then((res)=>{
      setTodos(res.data)
    })
  },[todos])

  return (
    <div>
      <div className="add-task">
        <form className="form-group" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={title}
            className="form-control"
            onChange={(e) => setTitle(e.target.value)}
            required
          ></input>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={desc}
            className="form-control"
            onChange={(e) => setDesc(e.target.value)}
            required
          ></input>
          <input
            type="submit"
            value="ADD TASK"
            className="add-btn"
          ></input>
        </form>
      </div>
  
      <div className="mng-task">
        <table className="table">
          <thead className="t-heading">
            <tr>
            <th style={{ width: "150px" }}>No.</th>
              <th style={{ width: "200px" }}>Title</th>
              <th style={{ width: "600px" }}>Description</th>
              <th style={{ width: "150px" }}>Status</th>
              <th style={{ width: "150px" }}>Delete</th>
            </tr>
          </thead>

          <tbody>
            {todos.map((todo,index)=>(
              <tr key={todo._id}>
              <td className="td-display">{index+1}</td>
              <td className="td-display">{todo.title}</td>
              <td className="td-display">{todo.description}</td>
              <td className="td-display">
                <input type="checkbox" name="status"></input>
              </td>
              <td className="td-display">
                <input type="submit" value="Delete" className="del-btn"></input>
              </td>
            </tr>
            ))}
                   </tbody>
   
        </table>
      </div>
    </div>
  );
}
