
import './App.css';
import PersonCard from './components/PersonCard';

function App() {

  const handleclick=()=>alert("This button has been clicked!")

  return (
    <div className="App">
   
    <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
    <button onClick={ handleclick }>Click Me</button>

    </div>
  );
}

export default App;
