import React, { useState } from "react";

const CreateStudent = ({ fetchStudents, onClose }) => {
  const [form, setForm] = useState({ id: "", name: "", age: "", phoneNumber: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.status === 201) {
      alert("학생 추가");
      fetchStudents();
      setForm({ id: "", name: "", age: "", phoneNumber: "" });
      onClose();
    } else {
      alert("추가 실패, 오류 코드: " + response.status);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    </form>
  );
};

export default CreateStudent;
