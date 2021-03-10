import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import './login.css'
export class login extends Component {
    constructor(){
        super()
        this.state={
            User:''
        }
    }
    responseGoogle=(response)=>{
     
        this.setState({User:response.profileObj});
        console.log('this is the user data',this.state.User)
        var x=response.profileObj.googleId;
     
        localStorage.setItem('document',JSON.stringify(response.profileObj));
        sessionStorage.setItem('GID',x)
        console.log('this is ',response.profileObj.googleId)
      
    }
    AllowCookies=()=>{
        alert('plese allow cookies');
        return(
          <div class="alert alert-danger">
          <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
        </div>    
        )
  }
    render() {
        if(this.state.User==''){
            return (
                <React.Fragment>

                <li>
                    <GoogleLogin clientId="893427255421-6n9hvjmricuj4q3jkskhoe8lc03dponn.apps.googleusercontent.com" 
                    buttonText="Login"
                    onSuccess={this.responseGoogle}
                    onFailure={this.AllowCookies}
                    cookiePolicy={'single_host_origin'}/>
                </li>
                </React.Fragment>
            )
        }
        else{
            return(
                <React.Fragment>
                         <li><span className='btn btn-default' style={{fontSize:'20px',marginTop:'3px',color:'darkblue',marginRight:'5px'}}>   <Link to='/cart'><i className='fa fa-shopping-cart' ></i> <i className='fa'> Cart</i></Link></span> </li>
                    <li>
                      <img className='PP' src={this.state.User.imageUrl} />
                    </li>
                    
                </React.Fragment>
               
            )
           
        }
      
    }
}

export default login
