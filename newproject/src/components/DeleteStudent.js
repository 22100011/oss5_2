import React from "react";

const DeleteStudent = ({ studentId, fetchStudents }) => {
  const handleDelete = async () => {
    const response = await fetch(`http://localhost:3000/students/${studentId}`, { method: "DELETE" });

    if (response.status === 200 || response.status === 204) {
      alert("삭제되었습니다");
      fetchStudents();
    } else {
      alert("삭제 실패, 오류 코드: " + response.status);
    }
  };

  return <button onClick={handleDelete}>삭제</button>;
};

export default DeleteStudent;
