import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email) {
      localStorage.setItem("user", JSON.stringify({ email }));

      const user = localStorage.getItem("user");
      if (user) {
        console.log("User logged in successfully!");
        navigate("/profile");
      }
    }
  };


  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl mb-4 font-semibold">Login</h1>
      <input
        className="p-2 border border-gray-300 mb-2 rounded w-72"
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => handleLogin()}
      >
        Login
      </button>
    </div>
  );
}
