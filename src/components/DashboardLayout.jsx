import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";

function DashboardLayout({ children }) {
  const navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <div className="card">
      {/* Header */}
      <div className="dashboard-header">
        <h1>Teacher Panel</h1>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Page Content */}
      {children}
    </div>
  );
}

export default DashboardLayout;
