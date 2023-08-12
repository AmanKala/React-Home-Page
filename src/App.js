import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Content from './Components/Content'


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
      </div>
      <Content/>
    </Router>
  );
}

export default App;
