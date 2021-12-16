import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Obras from './pages/home/obras';
import About from './pages/home/about';
import Cart from './pages/home/cart';
import Home from './pages/home/home';

import ViewProducts from './pages/vendedor/viewProducts';
import AddProduct from './pages/vendedor/addProduct';
import Dashboard from './pages/vendedor/dashboard';

import Login from './pages/login/login';
import ForgotPassword from './pages/forgotPassword/forgotPassword';

import NotFound from './pages/notFound';
import { ContextProvider } from './context/globalContext';

function App() {
  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route path="/home" component={Home} />

          <Route path="/login" component={Login} />
          
          <Route path="/forgotPassword" render={() => {
            return localStorage.getItem("user") ? <Dashboard /> : <ForgotPassword />
          }} />

          <Route path="/dashboard" render={() => {
            return localStorage.getItem("user") ? <Dashboard /> : <Login />
          }} />

          <Route path="/obras" component={Obras} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          <Route path="/admin/view-products" component={ViewProducts} />
          <Route path="/admin/add-product" component={AddProduct} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
