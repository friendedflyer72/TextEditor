import React, { useState } from "react";
import Container from "./components/Container";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

const App = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "dark") {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setMode("light");
      showAlert("Light mode has been set!", "success");
      document.title = "TextEditor - LightMode";
    } else {
      document.body.style.backgroundColor = "#0A2463";
      document.body.style.color = "white";
      setMode("dark");
      showAlert("Dark mode has been set!", "success");
      document.title = "TextEditor - DarkMode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 5200);
  };

  return (
    <>
        <Navbar
          mode={mode}
          toggleMod={toggleMode}
          Title="Text Editor"
          About="About"
        />
        <h1 className="underline text-center text-red-500">Coming soon !</h1>
        {alert && (
          <div className={`alert alert-${alert.type}`}>{alert.msg}</div>
        )}
    </>
  );
};

export default App;
