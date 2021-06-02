import './App.css';
import { ButtonFilled, ButtonOutlined, ButtonClear } from "./components/atoms/Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonFilled>
          Hello World
        </ButtonFilled>
        <ButtonOutlined>
          Hello World
        </ButtonOutlined>
        <ButtonClear>
          Hello World
        </ButtonClear>
      </header>
    </div>
  );
}

export default App;
