import { useState } from "react";
import "./App.css";
import Switch from "@mui/material/Switch";

function App() {
  const [buttontoggle, setButtontoggle] = useState(false);

  const toggle = () => {
    if (buttontoggle == false) {
      setButtontoggle(true);
    } else {
      setButtontoggle(false);
    }
  };
  console.log(buttontoggle);

  return (
    <div>
      <div className={buttontoggle ? "darkMode" : "divStle"}>hello</div>
      <button onClick={() => toggle(true)}>Dark</button>
      <Switch onClick={() => toggle(true)} defaultChecked />
    </div>
  );
}

export default App;
