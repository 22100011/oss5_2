import React, { useState, useEffect } from "react";
import './modal.css';

const StudentModal = ({ isOpen, onClose, onSubmit, initialData = {}, isUpdateMode }) => {
  const [form, setForm] = useState({
    id: "",
    name: "",
    age: "",
    phoneNumber: "",
  });

  useEffect(() => {
    if (isUpdateMode && initialData) {
      setForm(initialData); 
    } else {
      setForm({ id: "", name: "", age: "", phoneNumber: "" }); 
    }
  }, [isOpen, initialData, isUpdateMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{isUpdateMode ? "Update Student" : "Add Student"}</h2>
        <form onSubmit={handleSubmit}>
          {!isUpdateMode && (
            <div>
              <label>ID:</label>
              <input
                type="number"
                name="id"
                value={form.id}
                onChange={handleChange}
                placeholder="학번"
                required
              />
            </div>
          )}
          <div>
            <label>NAME:</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="이름"
              required
            />
          </div>
          <div>
            <label>AGE:</label>
            <input
              type="number"
              name="age"
              value={form.age}
              onChange={handleChange}
              placeholder="나이"
              required
            />
          </div>
          <div>
            <label>PHONE:</label>
            <input
              type="text"
              name="phoneNumber"
              value={form.phoneNumber}
              onChange={handleChange}
              placeholder="전화번호"
              required
            />
          </div>
          <div>
            <button>
              {isUpdateMode ? "Update" : "Add"}
            </button>
            <button
              type="button"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <style>
        {`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .modal-content {
            background: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            width: 400px;
          }
        `}
      </style>
    </div>
  );
};

export default StudentModal;
