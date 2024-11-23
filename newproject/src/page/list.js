import React from "react";
import { Link } from "react-router-dom";
import ReadList from "../components/ReadList";
import './butt.css';
const list = () => {
  return (
    <div>
      <h1>List Page</h1>
      <Link to="/detail">
        <button  className='head'>Detail Page로 이동</button>
      </Link>
      <Link to="/update">
        <button>Update Page로 이동</button>
      </Link>
      <Link to="/add">
        <button>Add Page로 이동</button>
      </Link>
      <ReadList/>
    </div>
  );
};

export default list;
