import 'react-app-polyfill/ie9'; // For IE 9-11 support
import 'react-app-polyfill/stable';
import 'react-app-polyfill/ie11'; // For IE 11 support
import React, { Component, Suspense } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter ,HashRouter, Route, Switch } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
import './Index.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout/DefaultLayout'));

// Pages
const Login    = React.lazy(() => import('./containers/DefaultPages/Login.jsx'));
const Register = React.lazy(() => import('./containers/DefaultPages/Register.jsx'));
const Page404  = React.lazy(() => import('./containers/DefaultPages/Page404.jsx'));
const Page500  = React.lazy(() => import('./containers/DefaultPages/Page500.jsx'));

class App extends Component {
    
  render() {
    return (
      <BrowserRouter>
          <Suspense fallback={loading()}>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <Login {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} /> 
            </Switch>
          </Suspense>
      </BrowserRouter>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

