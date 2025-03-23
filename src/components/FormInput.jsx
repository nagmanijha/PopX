import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

export default function Header({ title }) {
  return (
    <header className="app-header">
      <nav>
        <Link to="/" className="logo-link">
          <h2 className="logo-text">PopX</h2>
        </Link>
        {title && <h1 className="page-title">{title}</h1>}
      </nav>
    </header>
  );
}