import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isInteracted, setIsInteracted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/profile');
  };

  return (
    <div className="flex flex-col min-h-screen justify-start p-4 bg-gray-100">
      <div className="max-w-sm w-full mx-auto mt-10">
        <h1 className="text-3xl font-bold text-gray-900">Sign in to your <br/> PopX account</h1>
        <p className="text-gray-600 mt-1 text-sm">Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit</p>
        <form onSubmit={handleSubmit} className="mt-4">
          {/* Email Address Field */}
          <div className="mb-3 relative">
            <label className="absolute -top-2 left-3 px-1 bg-gray-100 text-sm text-purple-600 font-normal">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="Enter email address"
              className="w-full mt-1 p-2 border-2 border-gray-300 rounded-md focus:outline-purple-500"
              value={formData.email}
              onChange={(e) => {
                setFormData({...formData, email: e.target.value});
                setIsInteracted(true);
              }}
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label className="absolute -top-2 left-3 px-1 bg-gray-100 text-sm text-purple-600 font-normal">
              Password
            </label>
            <input 
              type="password" 
              placeholder="Enter password"
              className="w-full mt-1 p-2 border-2 border-gray-300 rounded-md focus:outline-purple-500"
              value={formData.password}
              onChange={(e) => {
                setFormData({...formData, password: e.target.value});
                setIsInteracted(true);
              }}
            />
          </div>

          {/* Login Button */}
          <button 
            type="submit" 
            className={`w-full py-2 rounded-lg text-white font-bold shadow-lg ${isInteracted ? 'bg-blue-200' : 'bg-gray-400'}`}
            onMouseLeave={() => setIsInteracted(false)}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}