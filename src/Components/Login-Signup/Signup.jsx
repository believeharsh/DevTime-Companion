import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const existingUser = localStorage.getItem(username);
    if (existingUser) {
      alert("User already exists");
    } else {
      localStorage.setItem(username, JSON.stringify({ password }));
      alert("Signup successful, You can log in now");

      navigate("/login"); // Redirect to Dashboard
    }
  };

  return (
    <div className="text-white">
      <h2>Signup</h2>
      <input
        className="text-black"
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className="text-black"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}

export default Signup;


