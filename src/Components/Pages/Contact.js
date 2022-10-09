import React from "react";

const Contact = ()=>{
    return(<div className="container-fluid">
        <div className="py-4">
        <h1>Contact Page</h1>
        <form>
  <div class="mb-3">
    <label  className="form-label">Email address</label>
    <input type="email" className="form-control"/>
    <div  className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label  className="form-label">Password</label>
    <input type="password" className="form-control"/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" />
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </div>
    </div>
    )
}

export default Contact;
