import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = localStorage.getItem(username);
    if (user) {
      const storedPassword = JSON.parse(user).password;
      if (password === storedPassword) {
        localStorage.setItem('isAuthenticated', true);
        alert('Login successful');
        navigate('/');
      } else {
        alert('Incorrect password');
      }
    } else {
      alert('User not found');
    }
  };

  return (
    <>
      <div className="">
      <div className='text-white '>
      <h2>Login</h2>
      <input className='text-black '
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input className='text-black'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
    <p className="mt-4 text-center text-white">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </>
   
  );
}

export default Login;
