import { useEffect, useState } from "react";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import DashboardLayout from "../components/DashboardLayout";

function MarkAttendance() {
  const [students, setStudents] = useState([]);
  const [attendance, setAttendance] = useState({});

  // 1️⃣ Fetch students
  useEffect(() => {
    const fetchStudents = async () => {
      const snapshot = await getDocs(collection(db, "students"));
      const list = snapshot.docs.map((docu) => ({
        id: docu.id,
        ...docu.data(),
      }));
      setStudents(list);
    };
    fetchStudents();
  }, []);

  // 2️⃣ Handle selection
  const handleChange = (id, value) => {
    setAttendance((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // 3️⃣ Save attendance
  const saveAttendance = async () => {
    if (students.length === 0) {
      alert("No students found");
      return;
    }

    const today = new Date().toISOString().split("T")[0];

    try {
      for (let student of students) {
        if (!attendance[student.id]) {
          alert("Please mark attendance for all students");
          return;
        }
      }

      for (let student of students) {
        await setDoc(doc(db, "attendance", today, "records", student.id), {
          name: student.name,
          rollNo: student.rollNo,
          status: attendance[student.id] || "Absent",
        });
      }
      alert("Attendance saved successfully");
    } catch (error) {
      console.error(error);
      alert("Error saving attendance");
    }
  };

  return (
    <DashboardLayout>
    <div>
      <h2>Mark Attendance</h2>

      {students.map((s) => (
        <div key={s.id}>
          {s.name}
          <select
            defaultValue=""
            onChange={(e) => handleChange(s.id, e.target.value)}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
      ))}

      <br />
      <button onClick={saveAttendance}>Save Attendance</button>
    </div>
    </DashboardLayout>
  );
}

export default MarkAttendance;
