import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import LOGIN from '../LOGIN/LOGIN.js'
import Glogin from '../Glogin/login.js'
import './NavBar.css'
import GoogleLogin from 'react-google-login'
class NavBar extends React.Component {
    constructor(){
        super()
        this.state={
            User:'',
            Brands:{
                name1:"REDMI MOBILES",
                name2:"MI MOBILES",
                name3:"POCO MOBILES"
            }
        }
    }
    render(){
        return (
        
            <div className='HEADER'>
            
                        <nav class="navbar navbar" style={{backgroundColor:'transparent',height:'150px'}}>
                            <div class="container-fluid" style={{backgroundColor:"transperant" ,color:'orange'}}>
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" style={{backgroundColor:'tomato'}} data-target="#myNavbar">
                                        <span style={{backgroundColor:'white'}} class="icon-bar"></span>
                                        <span style={{backgroundColor:'white'}} class="icon-bar"></span>
                                        <span style={{backgroundColor:'white'}} class="icon-bar"></span>                        
                                    </button>
                                    <a class="" style={{}} href="#">
                                        <div  >
                                        {/* <img src='/images/mihome.png' className='HomeIcon'  /> */}
                                          <Link to='/'>
                                                 <button className='brand' >MI</button> 
                                          </Link>
                                        
                                        </div>
                                    
                                    </a>
                                </div>
                                <div class="collapse navbar-collapse" id="myNavbar">
                                <ul class="nav navbar-nav"style={{color:''}}>
                                    
                                    <li class="active dropbtn"><Link to={`/Products/${this.state.Brands.name2}`}> MI MOBILES </Link></li>
                                    <li class="dropdown"><Link to={`/Products/${this.state.Brands.name1}`}> REDMI MOBILES</Link></li>
                                    <li><Link to={`/Products/${this.state.Brands.name3}`}> POCO MOBILES</Link></li>
                                </ul>
                                <ul class="nav navbar-nav navbar-right">
                                        <Glogin/>
                                    {/* <li>   
                                        <Link to='/Login'><span class="glyphicon glyphicon-log-in" style={{backgroundColor:'transparent'}}></span> Login</Link>                  
                                    </li> */}
                                
                                </ul>

                               
                                </div>
                            </div>
                        </nav>
    
              
         
         
            </div>
        )
    

    
   
    }
}

export default NavBar
