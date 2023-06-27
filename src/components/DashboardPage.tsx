import React from "react";
import { useNavigate } from "react-router-dom";

interface DashboardPageProps {
  onLogout: () => void;
}

const DashboardPage: React.FC<DashboardPageProps> = ({ onLogout }) => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("ZeFiToken");
    onLogout();
    navigate("/login");
  };

  return (
    <div>
      <h1>Dashboard Page</h1>
      <button onClick={logoutUser}>Logout User</button>
    </div>
  );
};

export default DashboardPage;
