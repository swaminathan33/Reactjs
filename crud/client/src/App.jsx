import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [list, setList] = useState([]);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  // get items
  useEffect(() => {
    axios
      .get("http://localhost:3000/getUsers")
      .then((re) => setList(re.data))
      .catch((err) => console.log(err));
  }, [list]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const editUser = {
        name: name,
        age: age,
      };
      axios
        .put(`http://localhost:3000/editUser/${editId}`, editUser)
        .then((re) => console.log(re.data))
        .catch((err) => console.log(err));
      setIsEditing(false);
      setEditId(null);
      setName("");
      setAge("");
    } else {
      const newList = {
        name: name,
        age: age,
      };
      setList([...list, newList]);
      setName("");
      setAge("");

      axios
        .post("http://localhost:3000/add", newList)
        .then((re) => console.log(re.data))
        .catch((err) => console.log(err));
    }
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/delete/${id}`)
      .then((re) => console.log(re.data))
      .catch((err) => console.log(err));
  };

  const handleEdit = (id) => {
    const editUser = list.find((user) => user._id == id);
    setName(editUser.name);
    setAge(editUser.age);
    setIsEditing(true);
    setEditId(id);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="number"
          placeholder="age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <button type="submit">Submit</button>
      </form>
      {list.map((li, index) => {
        return (
          <div key={index}>
            <p>
              {li.name}
              {li.age}
            </p>
            <button onClick={() => handleDelete(li._id)}>Delete</button>
            <button onClick={() => handleEdit(li._id)}>Edit</button>
          </div>
        );
      })}
    </div>
  );
};

export default App;
