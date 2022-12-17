import logo from './logo.svg';
import './App.css';
import Index from './components/Index';

function App() {
  return (
    <div className="App">

      <Index  name="Hala"  age={22} haircolor="brown">
      <p>Hala Mohammad Bilal Abuzant</p>
      <p>Full-Stack developer</p>
      <p>Civil Engineer</p>

      </Index>
      {/* <Index name="hala"  age={22} haircolor="brown"/>

  
      <Index name="Izz"  age={22} haircolor="Black"/>

      <Index name="Zaki" age={22} haircolor="yellow"/> */}
    
    </div>
  );
}

export default App;
