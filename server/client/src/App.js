import React, { createContext , useReducer } from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import {Home , About , Contact , Portfolio , Login  , Register} from './compontents';
import Nav   from './compontents/Nav';
import  Home   from './compontents/Home';
import About   from './compontents/About';
import Contact   from './compontents/Contact';
import Portfolio   from './compontents/Portfolio/Portfolio';
import Login from './compontents/Login';
import Register from './compontents/Register';
import Logout from './compontents/Logout';
import {initialState ,reducer } from '../src/reducer/useReducer';
import { Redirect, Route, Switch } from 'react-router';

//  for login ma logout ko hatne ke lye opor register ke waqat login hide krne ke lye  
// 1 : Context Api 
export const UserContext = createContext();

const  App = () => {
 
const [state, dispatch] = useReducer(reducer, initialState);

  return (
 <>
 <UserContext.Provider value={state , dispatch}> 


 <Nav/>
 <Switch>
    <Route exact path="/" component={Home} />
    <Route  exact path="/about" component={About} />
    <Route  exact path="/contact" component={Contact} />
    <Route  exact path="/work" component={Portfolio} />
    <Route  exact path="/signin" component={Login} />
    <Route  exact path="/signup" component={Register} />
    <Route  exact path="/logout" component={Logout} />
    <Redirect to="/" />
</Switch>
 </UserContext.Provider>

 </>
  )
}

export default App;
