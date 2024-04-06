import "./App.css";
import "./theme.css";
import { useState } from "react";
function App() {
  const [person, setperson] = useState("Mohamed Emad");
  const changeName = () => {
    setperson("Mohab");
  };
  const [age, setage] = useState(28);
  const changeAge = () => {
    setage(33);
  };
  const [count, setcount] = useState(0);
  const changeCount = () => {
    setcount(count + 1);
  };
  const [theme, settheme] = useState("");

  return (
    <div className={`App ${theme}`}>
      <button
        onClick={() => {
          settheme(theme === "" ? "Dark" : "");
        }}
        style={{ marginBottom: "44px" }}
      >
        ToggleTheme
      </button>
      <div   onChange={() => {
          settheme(theme === "" ? "Dark" : "");
        }} className="btn-container" style={{ marginBottom: "44px" }}>
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          onClick={() => {
            settheme("Light");
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            settheme("Dark");
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            settheme("Grey");
          }}
          style={{ marginRight: "26px" }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            settheme("Pink");
          }}
          style={{ marginRight: "26px" }}
        >
          Pink
        </button>
      </div>
      <h2>My name is {person}</h2>
      <button onClick={changeName}>Change name</button>
      <h2>My age is {age}</h2>
      <button onClick={changeAge}>My age</button>
      <h2>count is :{count} </h2>
      <button onClick={changeCount}>Press</button>
    </div>
  );
}
export default App;
