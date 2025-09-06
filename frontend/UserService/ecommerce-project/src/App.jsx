import React, { useState } from "react";
import Login from "./Components/Login";
import Signup from "./Components/signup"; 
import "./auth.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      {isLogin ? (
        <Login switchPage={() => setIsLogin(false)} />
      ) : (
        <Signup switchPage={() => setIsLogin(true)} />
      )}
    </>
  );
}

export default App;
