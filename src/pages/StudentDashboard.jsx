import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";

function StudentDashboard() {
  const [rollNo, setRollNo] = useState("");
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    if (!rollNo) {
      alert("Enter roll number");
      return;
    }

    const attendanceSnap = await getDocs(collection(db, "attendance"));
    let result = [];

    for (let dateDoc of attendanceSnap.docs) {
      const recordsSnap = await getDocs(
        collection(db, "attendance", dateDoc.id, "records")
      );

      recordsSnap.forEach((docu) => {
        const data = docu.data();
        if (data.rollNo === rollNo) {
          result.push({
            date: dateDoc.id,
            status: data.status,
          });
        }
      });
    }

    setRecords(result);
  };

  return (
    <div className="container">
      <h2>Student Attendance</h2>

      <input
        placeholder="Enter Roll No"
        value={rollNo}
        onChange={(e) => setRollNo(e.target.value)}
      />

      <button onClick={fetchAttendance}>View Attendance</button>

      <ul>
        {records.map((r, i) => (
          <li key={i}>
            {r.date} - {r.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StudentDashboard;
