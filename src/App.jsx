import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import Obras from './pages/home/obras';
import About from './pages/home/about';
import Cart from './pages/home/cart';
import Home from './pages/home/home';

import ViewProducts from './pages/vendedor/viewProducts';
import AddProduct from './pages/vendedor/addProduct';

import Login from './pages/login/login';
import ForgotPassword from './pages/forgotPassword/forgotPassword';

import PrivateRoute from './routes/privateRoute'
import PublicRoute from './routes/publicRoute'

import NotFound from './pages/notFound';
import { ContextProvider } from './context/globalContext';

import { AuthContext } from './context/authContext';
import Whoami from './pages/vendedor/whoami';
import BuyOrders from './pages/vendedor/buyOrders';

function App() {

  const { isAuthenticated } = useContext(AuthContext);
  const isAuth = isAuthenticated();

  return (
    <ContextProvider>
      <Router>
        <Switch>
          <Redirect exact from="/" to="/home" />
          
          <Route path="/home" component={Home} />
          <Route path="/obras" component={Obras} />
          <Route path="/about" component={About} />
          <Route path="/cart" component={Cart} />
          
          <PublicRoute
            path="/login"
            isAuthenticated={isAuth}
          >
            <Login />
          </PublicRoute>
          
          <PublicRoute
            path="/forgotPassword"
            isAuthenticated={isAuth}
          >
            <ForgotPassword />
          </PublicRoute>

          <PrivateRoute
            path="/dashboard/view-products"
            isAuthenticated={isAuth}
          >
            <ViewProducts/>
          </PrivateRoute>
          
          <PrivateRoute
            path="/dashboard/add-product"
            isAuthenticated={isAuth}
          >
            <AddProduct/>
          </PrivateRoute>
          
          <PrivateRoute
            path="/dashboard/whoami"
            isAuthenticated={isAuth}
          >
            <Whoami/>
          </PrivateRoute>

          <PrivateRoute
            path="/dashboard/buy-orders"
            isAuthenticated={isAuth}
          >
            <BuyOrders/>
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ContextProvider>
  );
}

export default App;
