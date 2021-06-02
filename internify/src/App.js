import "./App.css";
import {
  ButtonFilled,
  ButtonOutlined,
  ButtonClear,
} from "./components/atoms/Button";
import { StarPlain, StarColoured, Add} from "./components/atoms/Icon";

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
      </header>
    </div>
  );
}

export default App;
