import React, { useEffect, useState } from "react";
import './read.css';

const ReadStudent = () => {
  const [students, setStudents] = useState([]);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3000/students");
    if (response.status === 200) {
      const data = await response.json();
      setStudents(data);
    } else {
      alert("데이터를 불러오지 못했습니다.");
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <div id="studentList">
        {students.map((student) => (
          <div key={student.id} className="readSt">
            <p>
              학번: {student.id} | 이름: {student.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadStudent;
