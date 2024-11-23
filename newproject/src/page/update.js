import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReadStudent from "../components/ReadStudent";

const Update = () => {

  return (
    <div>
      <h1>Update Page</h1>
      <Link to="/list">
        <button>List Page로 돌아가기</button>
      </Link>
      <ReadStudent/>
    </div>
  );
};

export default Update;