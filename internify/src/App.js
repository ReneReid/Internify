import './App.css';
import ContinueBtn from './components/atoms/ContinueBtn';
import CheckboxTemp from './components/atoms/CheckboxTemp';
import RadioTemp from './components/atoms/RadioTemp';
import InputFormJobHeader from './components/molecules/InputFormJobHeader';
import PositionSubHeader from './components/molecules/PositionSubHeader';
import LengthSubHeader from './components/molecules/LengthSubHeader';

function App() {
  return (
    <div className="App">
        <ContinueBtn />
        <CheckboxTemp name={"posCheck"} color={"primary"} label={"Position"}/>
        <RadioTemp value={"4 months"} color={"primary"} label={"4 months"}/>
        <InputFormJobHeader />
        <PositionSubHeader />
        <LengthSubHeader />
    </div>
  );
}

export default App;
