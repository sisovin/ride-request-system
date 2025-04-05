import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import RideAssignments from './components/RideAssignments';
import RideStatus from './components/RideStatus';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ride-assignments" component={RideAssignments} />
          <Route path="/ride-status" component={RideStatus} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
