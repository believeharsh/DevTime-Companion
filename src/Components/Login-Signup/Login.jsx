import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = localStorage.getItem(username);
    if (user) {
      const storedPassword = JSON.parse(user).password;
      if (password === storedPassword) {
        localStorage.setItem("isAuthenticated", true);
        alert("Login successful");
        navigate("/");
      } else {
        alert("Incorrect password");
      }
    } else {
      alert("User not found");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="flex w-[90%] h-[90%] bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-1/2 flex items-center justify-center bg-gray-800">
          <div className="w-[80%] h-[80%]">
            <img
              src="/Images/Login_page.png"
              alt="Login Visual"
              className="max-w-full h-auto"
            />
          </div>
        </div>

        <div className="w-1/2 flex flex-col justify-center items-center bg-gray-900 p-4">
        <h1 className="text-3xl  mb-4 text-left text-white">
              DevTime-Companion.In
            </h1>
          <div className="text-white w-2/3">
            
            <h2 className="text-3xl font-thin mb-4 text-center">Login</h2>

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
              onClick={handleLogin}
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </button>

            <p className="mt-4 text-center">
              Don't have an account?{" "}
              <Link to="/signup" className="text-blue-400 hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
