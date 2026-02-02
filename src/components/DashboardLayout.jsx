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
    <>
      {/* Header */}
      <div className="app-header">
        <h1>Smart Attendance</h1>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="app-content">
        {children}
      </div>
    </>
  );
}

export default DashboardLayout;
