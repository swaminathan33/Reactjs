import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { IoMenu } from "react-icons/io5";
import "./dashboard.css";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  const navigate = useNavigate();
  const [logOut, setLogOut] = useState(false);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/login");
    }
  }, [logOut]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/getUsers")
      .then((user) => setUsers(user.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const newUsers = users.filter((li) => li._id != id);
    console.log(id);
    setUsers(newUsers);
    axios
      .delete(`http://localhost:3002/delete/${id}`)
      .then((re) => console.log(re))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      const newList = users.map((li) => {
        if (li._id == editId) {
          // EDITING
          const editUsers = {
            name: name,
            age: age,
          };

          axios
            .put(`http://localhost:3002/update/` + editId, {
              name: name,
              age: age,
            })
            .then((result) => console.log(result))
            .catch((err) => console.log(err));

          return { ...li, name: name, age: age };
        } else {
          return li;
        }
      });

      setUsers(newList);
      setName("");
      setAge("");
      setEditId(null);
      setIsEditing(false);
    } else {
      const newUser = {
        name: name,
        age: age,
      };

      setUsers([...users, newUser]);
      setAge("");
      setName("");

      axios
        .post("http://localhost:3002/add", { newUser })
        .then((result) => console.log(result))
        .catch((err) => console.log(err));
    }
  };

  const handleEdit = (id) => {
    const edit = users.find((li) => li._id == id);
    setEditId(edit._id);
    setIsEditing(true);
    setName(edit.name);
    setAge(edit.age);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");

    setLogOut(true);
  };

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="table-body">
        <div>
          <div></div>
          <div>
            <div>
              <form action="" onSubmit={handleSubmit}>
                <div className="input-box-table">
                  <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                </div>
                <div className="input-box-table">
                  <input
                    type="number"
                    placeholder="Age"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                  />
                </div>
                <div className="add-button">
                  <button>{isEditing ? "Edit" : "Add"}</button>
                </div>
              </form>
            </div>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {currentPosts.map((li, id) => {
                  return (
                    <tr key={id}>
                      <td>{li.name}</td>
                      <td>{li.age}</td>
                      <td className="action-buttons">
                        <button onClick={() => handleDelete(li._id)}>❌</button>
                        <button onClick={() => handleEdit(li._id)}>✍️</button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <Pagination
              postsPerPage={postsPerPage}
              length={users.length}
              handlePagination={handlePagination}
              currentPage={currentPage}
            />
            <div className="signout">
              <button onClick={handleLogout}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
