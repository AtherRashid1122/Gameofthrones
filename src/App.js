import React from 'react'
import Login from './component/Screens/Login';
import Home from './component/Screens/Home';
import Apidataintoredux from './component/Screens/Apidataintoredux';
import Getdata from './component/Screens/Getdata';
import Recieved from './component/Screens/Recieved';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";
import Registrationform from './component/Screens/Registrationform';
import Signup from './component/Screens/Auth/Signup';
import Loginauth from './component/Screens/Auth/Loginauth';



const App = () => {
  return (
    <div style={{}}>

      <div style={{ background: 'yellow', display: 'flex', justifyContent: 'space-around' }}>

        <li>
          <Link to="/Home">Counter App</Link>
        </li>

        <li>
          <Link to="/Login">Login/Logout</Link>
        </li>

        <li>
          <Link to="/Api">ApidatatoRedux</Link>
        </li>

        <li>
          <Link to="/getdata">Getdata</Link>
        </li>

        <li>
          <Link to="/recieved">Recieved</Link>
        </li>
        <li>
          <Link to="/registration">RegistrationForm</Link>
        </li>


        <li>
          <Link to="/signin">Signup</Link>
        </li>

        <li>
          <Link to="/Loginauth">Login</Link>
        </li>
      </div>
      <Switch>
        <Route exact path="/Login">
          <Login />
        </Route>

        <Route exact path="/Home">
          <Home />
        </Route>

        <Route exact path="/Api">
          <Apidataintoredux />
        </Route>

        <Route exact path="/getdata">
          <Getdata />
        </Route>


        <Route exact path="/recieved">
          <Recieved />
        </Route>

        <Route exact path="/registration">
          <Registrationform />
        </Route>


        <Route exact path="/signin">
          <Signup />
        </Route>


        <Route exact path="/Loginauth">
          <Loginauth />
        </Route>
      </Switch>
    </div>

  )
}
export default App;