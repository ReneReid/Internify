import './App.css';
import ContinueBtn from './components/atoms/ContinueBtn';
import CheckboxTemp from './components/atoms/CheckboxTemp';
import RadioTemp from './components/atoms/RadioTemp';
import InputFormJobHeader from './components/molecules/InputFormJobHeader';
import PositionSubHeader from './components/molecules/PositionSubHeader';

function App() {
  return (
    <div className="App">
        <ContinueBtn />
        <CheckboxTemp name={"posCheck"} color={"primary"} label={"Position"}/>
        <RadioTemp value={"4 months"} label={"4 months"}/>
        <InputFormJobHeader />
        <PositionSubHeader />
    </div>
  );
}

export default App;
