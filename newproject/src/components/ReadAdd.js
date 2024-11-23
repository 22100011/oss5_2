import React, { useEffect, useState } from "react";
import StudentModal from "./StudentModal";
import './read.css';

const ReadStudent = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddStudent = async (studentData) => {
    const response = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    if (response.status === 201) {
      alert("학생이 추가되었습니다!");
      fetchStudents();
      handleCloseModal();
    } else {
      alert("학생 추가에 실패했습니다. 오류 코드: " + response.status);
    }
  };

  return (
    <div>
      <button
        className="addBu"
        onClick={handleOpenModal}
      >
        Add Student
      </button>
      <div id="studentList">
        {students.map((student) => (
          <div key={student.id} className="readSt">
            <span>
              학번: {student.id} | 이름: {student.name} | 나이: {student.age} | 번호: {student.phoneNumber}
            </span>
          </div>
        ))}
      </div>

      <StudentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={handleAddStudent}
        initialData={null}
        isUpdateMode={false}
      />
    </div>
  );
};

export default ReadStudent;
