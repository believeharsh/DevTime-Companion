import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// Helper function to hash the password
const hashPassword = async (password) => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hash = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(hash))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('');
};

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      alert("User already exists");
    } else {
      // Hash the password before storing it
      const hashedPassword = await hashPassword(password);
      localStorage.setItem(username, JSON.stringify({ password: hashedPassword }));
      alert("Signup successful, You can log in now");

      navigate("/login");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex w-[90%] h-[90%] bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Left side: Image */}
        <div className="w-1/2 flex items-center justify-center bg-gray-800">
          <div className="w-[80%] h-[80%]">
            <img
              src="/Images/Login_page.png" // Replace with your signup image
              alt="Signup Visual"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        {/* Right side: Signup form */}
        <div className="w-1/2 flex flex-col justify-center items-center bg-gray-900 p-4">
          <h1 className="text-3xl mb-4 text-left text-white">
            DevTime-Companion.In
          </h1>
          <div className="text-white w-2/3">
            <h2 className="text-3xl font-thin mb-4 text-center">Signup</h2>

            <input
              className="w-full p-2 mb-4 text-black rounded"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              className="w-full p-2 mb-4 text-black rounded"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleSignup}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Signup
            </button>

            <p className="mt-4 text-center">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
