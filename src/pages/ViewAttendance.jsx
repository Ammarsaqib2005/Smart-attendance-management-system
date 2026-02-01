import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import DashboardLayout from "../components/DashboardLayout";

function ViewAttendance() {
  const [date, setDate] = useState("");
  const [records, setRecords] = useState([]);

  const fetchAttendance = async () => {
    if (!date) return;

    const snapshot = await getDocs(
      collection(db, "attendance", date, "records")
    );

    const list = snapshot.docs.map((docu) => docu.data());
    setRecords(list);
  };

  return (
    <DashboardLayout>
    <div>
      <h2>View Attendance</h2>

      <input type="date" onChange={(e) => setDate(e.target.value)} />
      <button onClick={fetchAttendance}>Fetch</button>

      <ul>
        {records.map((r, i) => (
          <li key={i}>
            {r.name} - {r.status}
          </li>
        ))}
      </ul>
    </div>
    </DashboardLayout>
  );
}

export default ViewAttendance;
