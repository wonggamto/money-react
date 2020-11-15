import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Layout from 'components/Layout';
function App() {
  return (
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
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签页</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>记账页</h2>
    </Layout>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>统计页</h2>
    </Layout>
  );
}

function NoMatch() {
  return <h2>页面不存在</h2>;
}

export default App;
