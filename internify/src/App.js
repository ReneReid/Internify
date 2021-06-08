import './App.css';
import ContinueBtn from './components/atoms/ContinueBtn';
import CheckboxTemp from './components/atoms/CheckboxTemp';
import RadioTemp from './components/atoms/RadioTemp';
import InputFormJobHeader from './components/molecules/InputFormJobHeader';
import PositionSubHeader from './components/molecules/PositionSubHeader';
import LengthSubHeader from './components/molecules/LengthSubHeader';
import CreateJobPosting from './components/pages/CreateJobPosting';

function App() {
  return (
    <div className="App">
      <CreateJobPosting />
    </div>
  );
}

export default App;
