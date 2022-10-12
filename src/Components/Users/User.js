import React, { useState, useEffect } from "react";
import {NavLink, useParams } from "react-router-dom";
import axios from "axios";

const User = () => {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    webiste: ""
  });
  const { id } = useParams();
  useEffect(() => {
    loadUser();
  }, []);
  const loadUser = async () => {
    const res = await axios.get(`https://backend-crud-api.herokuapp.com/user/user-detail/${id}`);
    setUser(res.data);
  };
  return (
    <div className="user">
      <div className="card w-50 mx-auto shadow ">
    <div className="container py-4 m-auto">
      <h4 className="mb-4 text-center">User Id: {id}</h4>
      <hr />
      <ul className="list-group w-50 ">
        <li className="list-group-item mb-2">name:-  {user.name}</li>
        <li className="list-group-item mb-2">user name:-  {user.username}</li>
        <li className="list-group-item mb-2">email:-  {user.email}</li>
        <li className="list-group-item mb-2">website:-  {user.website}</li>
      </ul>
      
      <NavLink className="btn btn-primary" to="/">Back to Home</NavLink>
    </div>
    </div>
    </div>
  );
};

export default User;