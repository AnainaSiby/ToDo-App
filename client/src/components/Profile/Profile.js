import { useState } from "react";
import "./Profile.css";

export default function Profile() {
  const [title, setTitle] = useState("");
  const [titles, setTitles] = useState([]);
  const [desc, setDesc] = useState("");
  const [descs, setDescs] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addTask = () => {
    setTitles([...titles, title]);
    setDescs([...descs, desc]);
  };

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
            onClick={addTask}
          ></input>
        </form>
      </div>
      <div className="mng-task">
        <table className="table">
          <thead className="t-heading">
            <tr>
              <th style={{ width: "200px" }}>Title</th>
              <th style={{ width: "600px" }}>Description</th>
              <th style={{ width: "150px" }}>Status</th>
              <th style={{ width: "150px" }}>Delete</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="td-display">sample-title</td>
              <td className="td-display">sample-description</td>
              <td className="td-display">
                <input type="checkbox" name="status"></input>
              </td>
              <td className="td-display">
                <input type="submit" value="Delete" className="del-btn"></input>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
