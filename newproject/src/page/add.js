import React from "react";
import { Link } from "react-router-dom";
import ReadAdd from "../components/ReadAdd";
import './butt.css';

const Add = () => {
  return (
    <div>
      <h1>Add Page</h1>
      <Link to="/list">
        <button className="head">List Page로 돌아가기</button>
      </Link>
      <ReadAdd/>
    </div>
    
  );
};

export default Add;
