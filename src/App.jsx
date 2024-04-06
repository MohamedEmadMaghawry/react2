import "./App.css";
import "./theme.css";
import { useReducer } from "react";
const intialData = { name: "MohamedEmad", age: 28, count: 0, theme: "light" };
const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };
    case "CHANGE_TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...state, theme: action.newValue };
        } else {
          return todo;
        }
      });
    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    case "CHANGE_COUNT":
      return { ...state, count: action.newValue };
    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };
  
    default:
      return state;
  }
};
function App() {
  const [alldata, dispatch] = useReducer(reducer, intialData);
  return (
    <div className={`App ${alldata.theme}`}>
      <button onClick={() => {dispatch({ type: "CHANGE_THEME", newValue: alldata.theme=="Light"? "Dark":"Light" });
 }} style={{ marginBottom: "44px" }}>ToggleTheme</button>
      <div onChange={() => {dispatch({ type: "CHANGE_THEME", newValue: alldata.theme=="Light"? "Dark":"Light" });
 }} className="btn-container"
        style={{ marginBottom: "44px" }}
      >
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
            dispatch({ type: "CHANGE_THEME", newValue: "Light" });
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "Dark" });
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "Grey" });
          }}
          style={{ marginRight: "26px" }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            dispatch({ type: "CHANGE_THEME", newValue: "Pink" });
          }}
          style={{ marginRight: "26px" }}
        >
          Pink
        </button>
      </div>
      <h2>My name is {alldata.name}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_NAME", newValue: "Mohab" });
        }}
      >
        Change name
      </button>
      <h2>My age is {alldata.age}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_AGE", newValue: 29 });
        }}
      >
        My age{" "}
      </button>
      <h2>count is {alldata.count}</h2>
      <button
        onClick={() => {
          dispatch({ type: "CHANGE_COUNT", newValue: alldata.count + 1 });
        }}
      >
        Press
      </button>
    </div>
  );
}
export default App;
