import { Routes, Route } from "react-router-dom";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Dashboard from "./pages/Dashboard";
import AddStudent from "./pages/AddStudent";
import MarkAttendance from "./pages/MarkAttendance";
import ViewAttendance from "./pages/ViewAttendance";
import StudentDashboard from "./pages/StudentDashboard";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  
  return (
    
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="/add-student" element={<PrivateRoute><AddStudent /></PrivateRoute>} />
          <Route path="/mark-attendance" element={<PrivateRoute><MarkAttendance /></PrivateRoute>} />
          <Route path="/view-attendance" element={<PrivateRoute><ViewAttendance /></PrivateRoute>} />
          <Route path="/student" element={<StudentDashboard />} />
      </Routes>
    
  );
}

export default App;
