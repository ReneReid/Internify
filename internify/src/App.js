import "./App.css";
import {
  ButtonFilled,
  ButtonOutlined,
  ButtonClear,
} from "./components/atoms/Button";
import { StarPlain, StarColoured, Add } from "./components/atoms/Icon";
import { ChipBasic, ChipClickable } from "./components/atoms/Chips";
import { TableBasic, TableStar } from "./components/molecules/Table";

const data = [
  {
    isStarred: false,
    title: "Software Developer",
    dateCreated: new Date("05/25/2021").toLocaleDateString(),
    score: "Good",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
    </div>
  );
}

export default App;
