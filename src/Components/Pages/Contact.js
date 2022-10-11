import React from "react";
import { NavLink } from "react-router-dom";

const Contact = () => {
  return (
    <div className="container-fluid">
      <div className="contact">
        <div className="card w-50 mx-auto shadow">
          <h1 className="text-center mt-4">Contact Page</h1>
          <form>
            <div className="col-md-6 mt-4  mx-auto">
              <label className="form-label">Email address</label>
              <input type="email" className="form-control" />
              <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="col-md-6 mt-4  mx-auto">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="col-md-6 mt-4 mx-auto mb-auto">
              <NavLink className="btn btn-warning" to="/">Back</NavLink>
              <button type="submit" className="btn btn-success m-2">Submit</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Contact;
