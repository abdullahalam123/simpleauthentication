import React from "react";
import { useNavigate } from "react-router-dom";

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const navigate = useNavigate();

  const loginUser = () => {
    localStorage.setItem("ZeFiToken", "someText");
    onLogin();
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={loginUser}>Login User</button>
    </div>
  );
};

export default LoginPage;
