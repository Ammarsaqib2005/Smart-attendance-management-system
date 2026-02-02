import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import DashboardLayout from "../components/DashboardLayout";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <DashboardLayout>
    <div>
      <h1 className="page-title">Dashboard</h1>
      <div className="dashboard-actions">
      <button onClick={() => navigate("/add-student")}>
        Add Student
      </button>

      <button onClick={() => navigate("/mark-attendance")}>
        Mark Attendance
      </button>

      <button onClick={() => navigate("/view-attendance")}>
        View Attendance
      </button>

      <br /><br />

      {/* <button onClick={handleLogout}>Logout</button> */}
      </div>
    </div>
    </DashboardLayout>
  );
}

export default Dashboard;
