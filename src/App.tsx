import React from 'react';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Tags from './views/Tags';
import Statistics from './views/Statistics';
import NoMatch from './views/NotMatch';
import {Money} from './views/Money';
import {Tag} from './views/Tag';


const AppWrapper = styled.div`
  color:#333;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags" >
            <Tags/>
          </Route>
          <Route exact path="/tags/:tag" >
            <Tag/>
          </Route>
          <Route exact path="/money">
            <Money/>
          </Route>
          <Route exact path="/statistics">
            <Statistics/>
          </Route>
          <Route exact path="*">
            <NoMatch/>
          </Route>
          <Redirect exact from="/" to="/statistics"/>
        </Switch>
      </Router>
    </AppWrapper>
  );
}


export default App;
