import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Money3 from './views/Money3';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import NoMatch from './views/NotMatch';
import {Money} from './views/Money';


const AppWrapper = styled.div`
  color:#333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route path="/tags">
            <Tags/>
          </Route>
          <Route path="/money">
            <Money/>
          </Route>
          <Route path="/statistics">
            <Statistics/>
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
          <Redirect exact from="/" to="/money"/>
        </Switch>
      </Router>
    </AppWrapper>
  );
}


export default App;
