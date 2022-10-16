import React from 'react';
import Home from './Home';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import CreateChallenge from './CreateChallenge';

const App = () => {
    return(
        <div>
            <Router>
                <Routes>
                  <Route exact path="/" element={<Home />} />
                  <Route path="/createChallenge" element={<CreateChallenge />} />
                </Routes>
            </Router>
        </div>
    );
}
export default App;
