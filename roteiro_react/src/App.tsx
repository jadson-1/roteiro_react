import React from "react";
import Logo from "./components/Logo";
import Principal from "./components/Principal";
import './App.css'; // Importando o arquivo de estilos

const App = () => {
  return (
    <div className="container">
    <h1 className="title">Hello, World!</h1>
    <>
      <Logo />
      <Principal />
    </>
    </div>
  );
};

export default App;
