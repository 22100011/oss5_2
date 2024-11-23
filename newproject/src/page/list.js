import React from "react";
import { Link } from "react-router-dom";
import ReadList from "../components/ReadList";
const list = () => {
  return (
    <div>
      <h1>List Page</h1>
      <Link to="/detail">
        <button>Detail Page로 이동</button>
      </Link>
      <Link to="/update">
        <button>Update Page로 이동</button>
      </Link>
      <ReadList/>
    </div>
  );
};

export default list;
