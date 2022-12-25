
import './App.css';
import Main from './views/Main';
import {Router} from '@reach/router';
import New from './views/New';
import Update from './views/Update';
function App() {

  return (

    <div className="App">
     <Router>

     <Main path="/"/>
     <New path="/new"/>
     <Update path="edit/:id"/>

     </Router>
      

    </div>

  );
}

export default App;
