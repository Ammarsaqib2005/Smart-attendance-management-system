import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // alert("Login successful ✅");
      navigate("/");
    } catch (error) {
      if (error.code === "auth/invalid-credential") {
        alert("Invalid email or password");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <AuthLayout title="Login">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded"
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-green-500 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
      <p className="text-center mt-3 text-sm">
        Don’t have an account?{" "}
        <a href="/signup" className="text-green-500">
          Signup
        </a>
      </p>
    </AuthLayout>
  );
}

export default Login;
