import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import DashboardLayout from "../components/DashboardLayout";

function AddStudent() {
  const [name, setName] = useState("");
  const [rollNo, setRollNo] = useState("");

  const handleAdd = async () => {
    if (!name || !rollNo) return alert("Fill all fields");

    await addDoc(collection(db, "students"), {
      name,
      rollNo,
    });

    setName("");
    setRollNo("");
    alert("Student added");
  };

  return (
    <DashboardLayout>
    <div>
      <h2>Add Student</h2>

      <input
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <button onClick={handleAdd}>Add</button>
    </div>
    </DashboardLayout>
  );
}

export default AddStudent;
