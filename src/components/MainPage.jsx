import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Include your custom styles if any

function MainPage() {
  const [playerCount, setPlayerCount] = useState(5);
  const [roles, setRoles] = useState({
    Мафія: 1,
    Дон: 1,
    Доктор: 1,
    Шериф: 1,
    Шлюха: 1,
    Мирний: 1,
  });
  const [assignedRoles, setAssignedRoles] = useState([]);
  const navigate = useNavigate(); // useNavigate hook

  const increment = () => setPlayerCount((prev) => Math.min(prev + 1, 20));
  const decrement = () => setPlayerCount((prev) => Math.max(prev - 1, 1));

  const incrementRole = (role) => {
    setRoles((prev) => ({
      ...prev,
      [role]: Math.min(prev[role] + 1, playerCount),
    }));
  };

  const decrementRole = (role) => {
    setRoles((prev) => ({
      ...prev,
      [role]: Math.max(prev[role] - 1, 0),
    }));
  };

  const totalRoles = Object.values(roles).reduce((sum, count) => sum + count, 0);
  const isButtonActive = totalRoles === playerCount;

  const handleNextClick = () => {
    if (!isButtonActive) return;

    const roleArray = [];
    Object.keys(roles).forEach((role) => {
      for (let i = 0; i < roles[role]; i++) {
        roleArray.push(role.charAt(0).toUpperCase() + role.slice(1));
      }
    });

    const shuffledRoles = roleArray.sort(() => Math.random() - 0.5);
    setAssignedRoles(shuffledRoles);

    // Navigate to the RolesDisplay page with assigned roles
    navigate('/RolesDisplay', { state: { assignedRoles: shuffledRoles } });
  };

  return (
    <div className="container">
      <h1>Загальна кількість гравців</h1>
      <div className="player-selection">
        <button onClick={decrement} className="btn">-</button>
        <span className="player-count">{playerCount}</span>
        <button onClick={increment} className="btn">+</button>
      </div>
      <div className="roles-selection">
        {Object.keys(roles).map((role) => (
          <div key={role} className="role">
            <span className="role-name">{role.charAt(0).toUpperCase() + role.slice(1)}:</span>
            <button onClick={() => decrementRole(role)} className="btn">-</button>
            <span className="role-count">{roles[role]}</span>
            <button onClick={() => incrementRole(role)} className="btn">+</button>
          </div>
        ))}
      </div>
      <div className="next-btn">
      <button
        className={`start-btn ${isButtonActive ? 'active' : 'inactive'}`}
        disabled={!isButtonActive}
        onClick={handleNextClick}
      >
        Next
      </button>
      </div>
    </div>
  );
}

export default MainPage;
