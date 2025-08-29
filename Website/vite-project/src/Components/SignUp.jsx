import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ onSignUp }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  // Username Validation (example: min length of 4 characters and no spaces)
  const validateUsername = (username) => {
    if (username.length < 4) {
      return 'Username must be at least 4 characters long.';
    }
    if (/\s/.test(username)) {
      return 'Username cannot contain spaces.';
    }
    return '';
  };

  // Password Validation (example: min length of 6 characters, at least one number, one uppercase, and one lowercase)
  const validatePassword = (password) => {
    if (password.length < 6) {
      return 'Password must be at least 6 characters long.';
    }
    if (!/[A-Z]/.test(password)) {
      return 'Password must contain at least one uppercase letter.';
    }
    if (!/[a-z]/.test(password)) {
      return 'Password must contain at least one lowercase letter.';
    }
    if (!/[0-9]/.test(password)) {
      return 'Password must contain at least one number.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate username and password
    const usernameError = validateUsername(username);
    const passwordError = validatePassword(password);

    if (usernameError || passwordError) {
      setError(`${usernameError || ''} ${passwordError || ''}`);
      return;
    }

    setError(''); // Clear error if everything is fine

    // Proceed with sign-up
    onSignUp(username);
    navigate('/destinations'); // 🔥 Redirect to destinations
  };

  return (
    <div className="bg-gray-50 pt-24 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-10 mb-10">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-lg font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-600 text-center">
              <p>{error}</p>
            </div>
          )}

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
