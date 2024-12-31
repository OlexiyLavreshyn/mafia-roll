import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css'; // Include your custom styles if any

function RolesDisplay() {
  const location = useLocation();
  const assignedRoles = location.state?.assignedRoles || [];

  return (
    <div className="container">
      <h1>Назначені ролі</h1>
      <div className="assigned-roles">
        <ul>
          {assignedRoles.map((role, index) => (
            <li key={index}>
              {index + 1}) {role}
            </li>
          ))}
        </ul>
      </div>
      <Link to="/" className="back-btn">
        Назад
      </Link>
    </div>
  );
}

export default RolesDisplay;
