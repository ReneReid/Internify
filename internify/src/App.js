import logo from './logo.svg';
import './App.css';
import ContinueBtn from './components/atoms/ContinueBtn';
import CheckboxTemp from './components/atoms/CheckboxTemp';
import RadioTemp from './components/atoms/RadioTemp';

function App() {
  return (
    <div className="App">
        <ContinueBtn />
        <CheckboxTemp name={"posCheck"} color={"primary"} label={"Position"}/>
        <RadioTemp value={"4 months"} label={"4 months"}/>
    </div>
  );
}

export default App;
