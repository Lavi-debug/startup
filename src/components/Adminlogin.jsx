import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Adminlogin = () => {

    const navigate = useNavigate()
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const host = "http://localhost:5000";

     // Handle username input change
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  // Handle form submit
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!username || !password) {
      setMessage('Please enter both username and password');
      return;
    }

    try {
      // Send POST request to the backend login endpoint using fetch
      const response = await fetch(`${host}/api/startup/loginadmin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      // Check if the login was successful
      const data = await response.json();

      if (response.ok) {
        // If login is successful, display success message
        setMessage(data.message);
        navigate('/Admin');
      } else {
        // If an error occurs (e.g., incorrect credentials), display error message
        setMessage(data.message);
      }
    } catch (error) {
      // If there is a network error, display a general error message
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <>
         <div className="login-container font-[400] text-black text-[12px] bg-green-100 h-full min-h-[100vh] items-center">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto  bg-white p-8 rounded-lg shadow-md">
                <div className="mb-6">
                    <label htmlFor="username" className="block text-lg font-semibold text-gray-700 mb-2">
                    Username
                    </label>
                    <input
                    type="text"
                    id="username"
                    name="username"
                    value={username}
                    onChange={handleUsernameChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                
                <div className="mb-6">
                    <label htmlFor="password" className="block text-lg font-semibold text-gray-700 mb-2">
                    Password
                    </label>
                    <input
                    type="text"
                    id="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </form>

            {message && (
                <p
                    className={`mt-4 p-3 rounded-md text-center text-lg font-semibold ${
                    message.includes('success')
                        ? 'bg-green-100 text-green-600'
                        : 'bg-red-100 text-red-600'
                    }`}
                >
                    {message}
                </p>
            )}

        </div>
    </>
  )
}

export default Adminlogin
