import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode == "dark") {
      document.body.style.backgroundColor == "white";
      setMode("light");
      showAlert("Light mode has been set!", "success");
      document.title = "TextEditor - DarkMode";
    }
  };

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      Type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 5200);
  }
  return <></>;
}

export default App;
