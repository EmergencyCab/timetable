import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="App">
      <h1>Timetabled: A week in the life Mr.Wiz</h1>
      <h2>This is the weekly schedule of Mr.Wiz</h2>
      <Calendar />
    </div>
  );
};

export default App;
