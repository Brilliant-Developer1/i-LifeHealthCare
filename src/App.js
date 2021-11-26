import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './component/About/About';
import AppointmentForm from './component/AppointmentForm/AppointmentForm';
import Footer from './component/Footer/Footer';
import Header from './component/Header/Header';
import HealthCheckUp from './component/HealthCheckUp/HealthCheckUp';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import NotFound from './component/NotFound/NotFound';
import OurServices from './component/OurServices/OurServices';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import Register from './component/Register/Register';
import ServiceDetails from './component/ServiceDetails/ServiceDetails';
import AuthProvider from './context/AuthProvider';

function App() {
  
  return (
    <AuthProvider>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/services">
            <OurServices></OurServices>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <PrivateRoute path="/healthCheckUp">
            <HealthCheckUp></HealthCheckUp>
          </PrivateRoute>
          <PrivateRoute path="/serviceDetails/:id">
            <ServiceDetails></ServiceDetails>
          </PrivateRoute>
          <PrivateRoute path="/appointment">
            <AppointmentForm></AppointmentForm>
          </PrivateRoute>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
