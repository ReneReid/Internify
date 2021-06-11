import "./App.css";
import Create from './components/pages/CreateJobHeader/Create';

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
      <Create />
    </div>
  );
}

export default App;
