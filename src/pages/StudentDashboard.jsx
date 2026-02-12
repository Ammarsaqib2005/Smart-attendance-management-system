import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import { db } from "../firebase/firebase";
import { collection, getDocs } from "firebase/firestore";

function StudentDashboard() {
  const [total, setTotal] = useState(0);
  const [present, setPresent] = useState(0);
  const [absent, setAbsent] = useState(0);

  useEffect(() => {
    const fetchAttendance = async () => {
      const user = auth.currentUser;

      if (!user) return;

      const attendanceSnapshot = await getDocs(
        collection(db, "attendance")
      );

      let totalClasses = 0;
      let presentCount = 0;
      let absentCount = 0;

      for (let docSnap of attendanceSnapshot.docs) {
        const recordsSnapshot = await getDocs(
          collection(db, "attendance", docSnap.id, "records")
        );

        recordsSnapshot.forEach((record) => {
          if (record.id === user.uid) {
            totalClasses++;

            if (record.data().status === "Present") {
              presentCount++;
            } else {
              absentCount++;
            }
          }
        });
      }

      setTotal(totalClasses);
      setPresent(presentCount);
      setAbsent(absentCount);
    };

    fetchAttendance();
  }, []);

  const percentage =
    total > 0 ? ((present / total) * 100).toFixed(2) : 0;
  console.log("Current UID:", auth.currentUser?.uid);
  return (
    <div>
      <h2>Student Dashboard</h2>

      <p>Total Classes: {total}</p>
      <p>Present: {present}</p>
      <p>Absent: {absent}</p>
      <p>Attendance %: {percentage}%</p>
    </div>
  );
}

export default StudentDashboard;