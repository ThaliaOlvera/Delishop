import './App.css';
import {useState} from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

//Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//Components
import Navbar from './components/Navbar';
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';
import NoMatch from './components/NoMatch';


const App = ()=> {

   const [sideToggle, setSideToggle] = useState (false);

  return(
  <Router>
      <Navbar click={()=>setSideToggle (true)}/>
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>
      <Backdrop show={sideToggle} click={() => setSideToggle(false)}/>
        <Routes>
          <Route path="/products/:id" element={<ProductScreen/>}/>
          <Route path="/cart" element={<CartScreen/>}/>
          <Route exact path="/" element={<HomeScreen/>}/> 
          <Route path="*" element={<NoMatch/>}/> 

        </Routes>
     
  </Router>
  )}

export default App;
