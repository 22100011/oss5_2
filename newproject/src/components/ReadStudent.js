import React, { useEffect, useState } from "react";
import StudentModal from "./StudentModal";
import './read.css';

const ReadStudent = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [updateCount, setUpdateCount] = useState(0); // 업데이트 횟수 state 추가

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

  const handleOpenModal = (student = null) => {
    setSelectedStudent(student);
    setIsUpdateMode(!!student);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedStudent(null);
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

  const handleUpdateStudent = async (studentData) => {
    const response = await fetch(`http://localhost:3000/students/${studentData.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(studentData),
    });

    if (response.status === 200) {
      alert("학생 정보가 수정되었습니다!");
      fetchStudents();
      setUpdateCount(updateCount + 1); // 업데이트 횟수 증가
      handleCloseModal();
    } else {
      alert("학생 정보 수정에 실패했습니다. 오류 코드: " + response.status);
    }
  };

  const handleDeleteStudent = async (studentId) => {
    const response = await fetch(`http://localhost:3000/students/${studentId}`, {
      method: "DELETE",
    });

    if (response.status === 200 || response.status === 204) {
      alert("학생이 삭제되었습니다!");
      fetchStudents();
    } else {
      alert("학생 삭제에 실패했습니다. 오류 코드: " + response.status);
    }
  };

  return (
    <div>
      <p style={{margin:"30px"}}>수정된 횟수: {updateCount}</p> {/* 업데이트 횟수 표시 */}
      <div id="studentList">
        {students.map((student) => (
          <div key={student.id} className="readSt">
            <span>
              학번: {student.id} | 이름: {student.name} |  나이: {student.age} | 번호: {student.phoneNumber}
            </span>
            <div>
              <button
                className="editButton"
                onClick={() => handleOpenModal(student)} 
              >
                Edit
              </button>
              <button
                className="deleteButton"
                onClick={() => handleDeleteStudent(student.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <StudentModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSubmit={isUpdateMode ? handleUpdateStudent : handleAddStudent}
        initialData={selectedStudent}
        isUpdateMode={isUpdateMode}
      />
    </div>
  );
};

export default ReadStudent;