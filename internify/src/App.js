import logo from './logo.svg';
import './App.css';
import ContinueBtn from './components/atoms/ContinueBtn';
import CheckboxTemp from './components/atoms/CheckboxTemp';
import RadioTemp from './components/atoms/RadioTemp';
import TextFieldTemp from './components/atoms/TextFieldTemp';

function App() {
  return (
    <div className="App">
        <ContinueBtn />
        <CheckboxTemp name={"posCheck"} color={"primary"} label={"Position"}/>
        <RadioTemp value={"4 months"} label={"4 months"}/>
        <TextFieldTemp id={"input-job-title"} label={"Job Title"} defaultValue={"Front-End Developer"}/>
    </div>
  );
}

export default App;
