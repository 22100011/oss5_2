import React from "react";
import { Link } from "react-router-dom";
import ReadDtail from "../components/ReadDetail";
import './butt.css';

const detail = () => {
  return (
    <div>
      <h1>Detail Page</h1>
      
      <Link to="/list">
        <button className='head'>List Page로 돌아가기</button>
      </Link>
      <ReadDtail/>
    </div>
    
  );
};

export default detail;
