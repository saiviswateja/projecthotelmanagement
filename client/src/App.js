import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import LoginManager from './components/manager/LoginManager';
import LoginBod from './components/bod/LoginBod';
import ManagerHome from './components/manager/ManagerHome';
import BodHome from './components/bod/BodHome';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
        <Route exact path="/home"><Home/></Route>
        <Route exact path="/manager/login"><LoginManager/></Route>
        <Route exact path="/bod/login"><LoginBod/></Route>
        <Route exact path="/manager/home"><ManagerHome/></Route>
        <Route exact path="/bod/home"><BodHome/></Route>
    </Switch>
    </BrowserRouter>    
  );
}

export default App;
