import React, { useState } from 'react';
import axios from 'axios'
import {useNavigate,NavLink} from 'react-router-dom';

const AddUser = () => {
    let navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",  
    phone: "",
    website: ""
  });

  const { name, username, email, website } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("https://jsonplaceholder.typicode.com/users", user);
   navigate('/');
  };
    return(
        
        <div className='container'>
            <div className='w-50 mx-auto shadow p-5'>
                <h2 className='mb-4 text-center'>Add new user</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className='form-group mb-2'>
                        <input type="text" 
                        className='form-control' 
                        placeholder='Enter your name' 
                        name="name" 
                        value={name}
                        onChange={e => onInputChange(e)} />
                    </div>
                    <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="email"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group mb-2">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Website Name"
              name="website"
              value={website}
              onChange={e => onInputChange(e)}
            />
          </div>
          <NavLink className="btn btn-warning mt-3" to="/">Back to home</NavLink>
          <button className="m-2 btn btn-success  mt-4">Add User</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser;