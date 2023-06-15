import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RegistrationForm from './registrationformegistrationForm';
import ActivationPage from './ActivationPage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RegistrationForm} />
        <Route path="/activate/:token" component={ActivationPage} />
      </Switch>
    </Router>
  );
};

export default App;
