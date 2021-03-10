import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import  './Products.css'
const url='https://miapi4002.herokuapp.com/mobiles?Brand='
export class Products extends Component {
    constructor(){
        super()
        this.state={
            Redmi:'',
            Poco:'',
            MI:''
        }
    }
    componentDidMount(){
        var rurl;
        var id=this.props.match.params.name; //GETTING BRAND OF THE MOBILES FROM PREVIOUS COMPONENT
        rurl=`${url}REDMI MOBILES`
        var murl=`${url}MI MOBILES`
        var purl=`${url}POCO MOBILES`
        fetch(rurl,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({Redmi:data})}); //GETTING DATA OF MOBILES BASED ON BRAND
        fetch(murl,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({MI:data})})
        fetch(purl,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({Poco:data})})
    }

    
    DisplayMobiles=(Product)=>{
        if(Product){
       return Product.map((item)=>{
                return(
                    <div className='MainCard col-lg-3 col-md-4 col-sm-6 col-xs-6'>
                              <img src={item.Image} className='Card-image'/>
                                <div className='Card-title'>
                                    {item.Name}
                                </div>
                                <div className='Card-Price'>
                                From &#8377;{item.Price[0].Model1} 
                                </div>
                               
                                <Link to={`/Buy/${item.Name}`}> <button className='btn btn-primary Card-btn'>Buy now</button> </Link>
                     </div>
                            
                )
            })
        }
    }
 
    render() {
        console.log(this.props.match.params.name,'he');
        const b=this.props.match.params.name;
        localStorage.setItem('BRAND',b);
      if(!this.state.Redmi==''){
        if(b=='REDMI MOBILES'){
            return (
                <div className='main'>
                    <div className='container-fluid'>
                        <div className='Mobiles-component'>
                          <div className='row'>
                          {/* displaying mobiles data  */}
                              {this.DisplayMobiles(this.state.Redmi)}     
                          </div>
                         </div>  
                    </div>
                    
                </div>
            )

        }else if(b=='POCO MOBILES'){
            return (
                <div className='main'>
                    <div className='container-fluid'>
                        <div className='Mobiles-component'>
                          <div className='row'>
                          {/* displaying mobiles data  */}
                              {this.DisplayMobiles(this.state.Poco)}     
                          </div>
                         </div>  
                    </div>
                    
                </div>
            )
        }else if(b=='MI MOBILES'){
            return (
                <div className='main'>
                    <div className='container-fluid'>
                        <div className='Mobiles-component'>
                          <div className='row'>
                          {/* displaying mobiles data  */}
                              {this.DisplayMobiles(this.state.MI)}     
                          </div>
                         </div>  
                    </div>
                    
                </div>
            )
        }
    }else{
        return(
            <div className='container' style={{textAlign:'center',alignContent:'center'}}>
            <img src='/images/loading.gif' width='160px' height='160px'/>
            
           </div>
        )
    } 
    }
}

export default Products
