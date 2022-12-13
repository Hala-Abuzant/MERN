
import './App.css';
import Display from './components/Display';
import Welcome from './components/Welcome';
import {Router,Link} from '@reach/router';


function App() {
  return (
    <div className="App">
     <Welcome />
      <Router>
      
      
      <Display path ="/:word/:color1/:color2"/>

      </Router>
    </div>
  );
}

export default App;
