import React, { useState } from "react";
import { Link,useLocation, useNavigate } from "react-router-dom";

const Nav_bar = () => {
  // console.log(useLocation());
  const location=useLocation();
  const navigate=useNavigate();
  const [searchTerm,setSearchTerm]=useState("");
  console.log(searchTerm);

  const submitHandler=(e)=>{
    e.preventDefault();
    if(searchTerm!=""){
    navigate(`/products/search/${searchTerm}`);
  }
  }
  return (
    <>
      {location.pathname != "/products" && (
      <div className="d-flex justify-content-between items-align-center bg-primary sticky-top">
        <Link className="text-light p-3 text-decoration-none" to="/">
          Home
        </Link>
        <Link className="text-light p-3 text-decoration-none" to="/about">
          About
        </Link>
        <Link className="text-light p-3 text-decoration-none" to="/teams">
          Teams
        </Link>
        <Link className="text-light p-3 text-decoration-none" to="/products">
          Products
        </Link>
        {/* {(location.pathname == '/career')?" ":(
        <Link className="text-light p-3 text-decoration-none" to="/career">
          Careers
        </Link>
        )} */}

        <div className="d-flex justify-content-between items-align-center">
          <form onSubmit={submitHandler}>
            <input onChange={(e)=>setSearchTerm(e.target.value)} style={{width:'400px'}} type="text" />
          </form>
        </div>

        <Link className="text-light p-3 text-decoration-none" to="/contact">
          Contact
        </Link>
        <Link className="text-light p-3 text-decoration-none" to="/users">
          Users
        </Link>
      </div>
      )}
    </>
  );
};

export default Nav_bar;
