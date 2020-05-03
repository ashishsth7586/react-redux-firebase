import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <Link to="/client/add" className="btn btn-success btn-block">
      <i className="fa fa-plus" aria-hidden="true"></i> New
    </Link>
  );
};

export default Sidebar;
