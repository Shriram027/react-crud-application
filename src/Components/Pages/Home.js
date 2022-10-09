import React ,{useState, useEffect} from "react";
import axios from 'axios';
import {NavLink} from 'react-router-dom';

const Home = ()=>{
    const [users,setUser] = useState([]);

    useEffect(() => {
        loadUsers();
    },[]);

    const loadUsers = async() => {
        const result = await axios.get("http://localhost:3003/users");
        setUser(result.data);   
    }

    const deleteUser = async id => {
        await axios.delete(`http://localhost:3003/users/${id}`);
        loadUsers();
      };

    return(<div className="container-fluid">
        <div className="py-4">
            <h1>Home Page</h1>
            <table class="table table-bordered table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">UserName</th>
      <th scope="col">Email</th>
      <th scope="col">Website</th>
      <th scope="col">Actions</th> 
    </tr>
  </thead>
  <tbody>
    {
        users.map((user,index)=>(<tr>
            <th scope="row">{index+1}</th>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.website}</td>
            <td>
                <NavLink className="btn btn-primary mr-2"  to={`/users/${user.id}`}>View</NavLink>
                <NavLink className="btn btn-outline-primary mr-2" to={`/users/edit/${user.id}`}>Edit</NavLink>
                <NavLink className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</NavLink>
            </td>
            </tr>
        ))
    }
    
  </tbody>
</table>
        </div>
    </div>
    )
}

export default Home;
