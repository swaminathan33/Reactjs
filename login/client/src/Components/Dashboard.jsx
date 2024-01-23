import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import Captcha from "./Captcha";
import { IoMenu } from "react-icons/io5";

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
      .get("http://localhost:3001/getUsers")
      .then((user) => setUsers(user.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    const newUsers = users.filter((li) => li._id != id);
    setUsers(newUsers);

    axios.delete("http://localhost:3001/delete/"+id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
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
        id: Math.floor(Math.random() * 1000),
        name: name,
        age: age,
      };

      setUsers([...users, newUser]);
      setAge("");
      setName("");

      axios
        .post("http://localhost:3001/add", { newUser })
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
    <div className="row">
      <div className="col-3">
        <nav className="navbar navbar-dark bg-dark w-10">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#content"
            >
              <IoMenu />
            </button>
            <div className="collapse navbar-collapse" id="content">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Link 1
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Link 1
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Link 1
                  </a>
                </li>
                <li className="nav-item">
                  <a href="" className="nav-link">
                    Link 1
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="col-6 d-flex justify-content-center flex-column">
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
          <button>{isEditing ? "Edit" : "Add"}</button>
        </form>
        </div>
        <table className="table table-striped
        ">
          <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {currentPosts.map((li) => {
            return (
              <tr key={li._id}>
                <td>{li.name}</td>
                <td>{li.age}</td>
                <td>
                  <button onClick={() => handleDelete(li._id)}>❌</button>
                </td>
                <td>
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
        <div>
        <button onClick={handleLogout}>Sign Out</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
