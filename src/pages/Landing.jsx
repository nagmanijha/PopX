import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Landing() {
    return (
      <div className="flex flex-col min-h-screen p-6 text-center bg-gray-100 justify-end">
        <div className="max-w-md w-full pb-10">
          <h1 className="text-3xl font-bold text-gray-900 text-left ">Welcome to PopX</h1>
          <p className="text-gray-600 mt-1 text-left">
            Lorem ipsum dolor sit amet, <br/> consectetur adipiscing elit
          </p>
          <div className="mt-4 space-y-2">
            <Link
              to="/signup"
              className="w-full block text-white text-center py-3 rounded-lg bg-purple-700 hover:bg-purple-800 shadow-lg"
            >
              Create Account
            </Link>
            <Link
              to="/login"
              className="w-full block text-gray-800 text-center py-3 rounded-lg border border-gray-300 
               bg-purple-300  hover:bg-gray-200"
            >
              Already Registered? Login
            </Link>
          </div>
        </div>
      </div>
    );
  }
  