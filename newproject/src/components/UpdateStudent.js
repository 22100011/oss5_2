import React, { useState } from "react";
import './update.css'

const UpdateStudent = ({ student, fetchStudents, onClose }) => {
  const [form, setForm] = useState({
    name: student.name,
    age: student.age,
    phoneNumber: student.phoneNumber,
  });

  const handleUpdate = async () => {
    const response = await fetch(`http://localhost:3000/students/${student.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.status === 200) {
      alert("수정 성공!");
      fetchStudents();
      onClose(); // 모달 닫기
    } else {
      alert("수정 실패! 오류 코드: " + response.status);
    }
  };

  return (
    <div>
      <h3>학생 정보 수정</h3>
      <div>
        <label>NAME:</label>
        <input
          type="text"
          placeholder="이름"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </div>

      <div>
        <label>AGE:</label>
        <input
          type="number"
          placeholder="나이"
          value={form.age}
          onChange={(e) => setForm({ ...form, age: e.target.value })}/>
      </div>

      <div>
        <label>PHONE:</label>
        <input
          type="text"
          placeholder="전화번호"
          value={form.phoneNumber}
          onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}/>
      </div>

      <button
        onClick={handleUpdate}
      >
        수정 완료
      </button>
    </div>
  );
};

export default UpdateStudent;
