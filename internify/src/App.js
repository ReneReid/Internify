import "./App.css";
import {
  ButtonFilled,
  ButtonOutlined,
  ButtonClear,
} from "./components/atoms/Button";
import { StarPlain, StarColoured, Add} from "./components/atoms/Icon";
import { TableBasic, TableStar } from "./components/molecules/Table";

const data = [{
  "isStarred": false,
  "title": "Software Developer",
  "dateCreated": new Date("05/25/2021").toLocaleDateString(),
  "score": "Good"
}];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonFilled>Hello World</ButtonFilled>
        <ButtonOutlined>Hello World</ButtonOutlined>
        <ButtonClear>Hello World</ButtonClear>
        <StarPlain />
        <StarColoured />
        <Add />
        <TableBasic data={data} />
        <TableStar data={data} />
      </header>
    </div>
  );
}

export default App;
