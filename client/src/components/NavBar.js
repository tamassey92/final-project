import React from "react";
import { Outlet, Link } from "react-router-dom";

function NavBar() {
    return (
        <header>
      <nav>
      {/* <Link to="/" style={{borderBottom: "none"}}>
          <h1 className="branding">
            Build Your BucketList
          </h1>
          </Link> */}
        <div className="navigation">
        <Link className="button" exact to="/">
            Home
          </Link>
          <Link className="button" exact to="/ideas">
            Browse Ideas
          </Link>
          {/* <Link className="button" exact to="/login">
            Login
          </Link> */}
          <Link className="button" exact to="/ideas/new">
            Add an Idea!
          </Link>
        </div>
      </nav>
      <Outlet />
    </header>
    );
};

export default NavBar;