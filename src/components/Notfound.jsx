import React from 'react'
import './stylings/Notfound.css'
import { Link } from 'react-router-dom'
const Notfound = () => {
  return (
    <div className="notfound-container d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="notfound-404">404</h1>
      <h2 className="mb-3">Oops! Page Not Found</h2>
      <p className="mb-4">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </div>
  );
}

export default Notfound