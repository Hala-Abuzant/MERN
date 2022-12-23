
import './App.css';
import Detail from './views/detail';
import Main from './views/Main';
import {Router} from '@reach/router';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
      <Main path="/"/>
      <Detail path="/:id"/>
      <Update path="/people/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;
