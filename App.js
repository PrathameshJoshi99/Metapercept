import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ClassForm from './components/ClassForm';
import ClassList from '/.components/ClassList';

function App() {
    return (
        <Router>
        <div>
        <Switch>
        <Route path="/" exact>
        <Classform />
        <ClassList />
        </Route>
        </Switch>
        </div>
        </Router>
        
        );
}
export default App;
