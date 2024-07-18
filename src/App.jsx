import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Alert from "./components/Alert";

const App = () => {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

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
      <Navbar mode={mode} toggleMod={toggleMode} Title="Text Editor" About="About" />
      <Alert alert={alert} />
      <div className="p-4">
        <h1 className="underline text-center text-red-500">Hello World!</h1>
      </div>
    </>
  );
};

export default App;
