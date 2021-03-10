import React from 'react'
import {BrowserRouter,Link,Route} from 'react-router-dom'
import Home from '../Home/Home'
import Footer from '../Home/footer'
import Buying from '../Buying/Buying'
import Navbar from '../Home/NavBar/NavBar'
import Cart from '../Cart/Cart'
import Products from '../All PRODUCTS/Products'
import LOGIN from '../Home/LOGIN/LOGIN.js'
const Routing = () => {
    return (
     
            <BrowserRouter>
                    <Navbar/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/Login" component={LOGIN}/>
                    <Route  path='/Buy/:name' component={Buying}/>
                    <Route path='/Cart' component={Cart}/>
                    <Route path='/Products/:name' component={Products}/>
                    <Footer/>
            </BrowserRouter>
      
    )
}

export default Routing
