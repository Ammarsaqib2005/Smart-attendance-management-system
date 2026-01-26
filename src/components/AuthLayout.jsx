function AuthLayout({ title, children }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white w-80 p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          {title}
        </h2>

        {children}
      </div>
    </div>
  );
}

export default AuthLayout;
