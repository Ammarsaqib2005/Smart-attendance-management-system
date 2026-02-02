function AuthLayout({ children }) {
  return (
    <div className="app-content">
      <h1 style={{ marginBottom: "20px" }}>Smart Attendance</h1>
      {children}
    </div>
  );
}

export default AuthLayout;
