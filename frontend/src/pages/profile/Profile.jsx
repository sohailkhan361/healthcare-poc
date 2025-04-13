import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.email}</h1>
      <p className="my-4">This is user's profile dashboard.</p>
      <p className="my-4 font-semibold">Profile Details</p>
      <p className="my-4 font-semibold">Appointments</p>
      <p className="my-4 font-semibold">Medical Reports</p>
      <p className="my-4 font-semibold">Medical History</p>
      <button
        className="bg-red-500 my-4 text-white px-4 py-2 rounded-full hover:bg-red-600"
        onClick={() => handleLogout()}
      >
        Logout
      </button>
    </div>
  );
}
