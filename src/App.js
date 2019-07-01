import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import ProjectDetails from './components/myprojects/ProjectDetails';
import CreateProject from './components/create/CreateProject';
import CreateCitation from './components/create/CreateCitation';
import CreateCitationWeb from './components/create/CreateCitationWeb';
import CreateCitationJournal from './components/create/CreateCitationJournal';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path='/signin' component={SignIn} />
          <Route path='/signup' component={SignUp} />
          <Route exact path='/' component={Dashboard} />
          <Route path='/project/:id' component={ProjectDetails} />
          <Route path='/create/project' component={CreateProject} />
          <Route exact path='/create/citation' component={CreateCitation} />
          <Route path='/create/citation/web/:id' component={CreateCitationWeb} />
          <Route path='/create/citation/journal/:id' component={CreateCitationJournal} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
