import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ListPage from "./page/list";
import DetailPage from "./page/detail";
import UpdatePage from "./page/update";
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1>학생 관리 시스템</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/list" />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/update" element={<UpdatePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
