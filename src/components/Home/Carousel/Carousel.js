import React,{Component}from 'react'
import {Link} from 'react-router-dom'
import  './carousel.css'
// const url='http://localhost:4002/Carousel'
const url='https://miapi4002.herokuapp.com/Carousel'
class Carousel extends React.Component{
    constructor(){
        super()
        this.state={
            Images:''
        }
    }
    componentDidMount(){
       
            
        fetch(url,{method:'GET'}).then((res)=>res.json()).then((data)=>{this.setState({Images:data})});
        console.log('it is the data in carousel7777777777&&',this.state.Images)
    }
    renderCarousel=(product)=>{
       if(product){
         return product.map((item)=>{
             if(item.Active=='true')
             {
                return(   
                          <div class="item active">
                          <Link to={`/Buy/${item.Name}`}> 
                                 <img src={item.Image} width="100%" alt={item.Name}/>
                          </Link>
                          </div>
                ) 
             }else{
                return(
                    
                         
                          <div class="item ">
                               <Link to={`/Buy/${item.Name}`}>
                               <img src={item.Image} width="100%" alt={item.Name}/>
                               </Link>
                         
                            </div>
                       
                    
                )
             }
               
           })
       }
     
    }
    render(){
        console.log('it is the data in carousel7777777777&&',this.state.Images)
        return(
        <React.Fragment>
           
               
           <div id="myCarousel" class="carousel slide" data-ride="carousel">
                        {/* <!-- Indicators --> */}
                   
                        <ol class="carousel-indicators">
                            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                            <li data-target="#myCarousel" data-slide-to="1"></li>
                            <li data-target="#myCarousel" data-slide-to="2"></li>
                            <li data-target="#myCarousel" data-slide-to="3"></li>
                            <li data-target="#myCarousel" data-slide-to="4"></li>
                            <li data-target="#myCarousel" data-slide-to="5"></li>
                          

                        </ol>

                        {/* <!-- Wrapper for slides --> */}
                        <div class="carousel-inner">
                           
                                {this.renderCarousel(this.state.Images)}
                                {/* <Link to={`/Buy/${item.Name}`}><div className="btn">Buy Now</div></Link>   */}
                           
                            <div className='item '>
                            <Link to='Buy/Redmi 9 Prime'> 
                                <img src='/images/Redmi 9 Prime.jpg'></img>
                                </Link>
                            </div>
                           
                            <div class="item ">
                            <Link to='/Buy/Redmi 9A'>  <img src='images/Redmi 9A.jpg'  alt="Redmi 9A"/></Link>
                          
                            </div>
                           
                        </div>

                        {/* <!-- Left and right controls --> */}
                        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                            <span class="glyphicon glyphicon-chevron-left"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" data-slide="next">
                            <span class="glyphicon glyphicon-chevron-right"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                   
                 
                 
        </React.Fragment>
        )
    }

}
export default Carousel




// import React,{Component}from 'react'


// import NavBar from '../NavBar/NavBar'

// import Products from '../Prouducts/Products'
// import  './carousel.css'

// class Carousel extends React.Component{
//     render(){
        
//         return(
//         <React.Fragment>
           
               
//                   <div id="myCarousel" class="carousel slide" data-ride="carousel">
//                         {/* <!-- Indicators --> */}
                   
//                         <ol class="carousel-indicators">
//                             <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
//                             <li data-target="#myCarousel" data-slide-to="1"></li>
//                             <li data-target="#myCarousel" data-slide-to="2"></li>
//                             <li data-target="#myCarousel" data-slide-to="3"></li>
//                             <li data-target="#myCarousel" data-slide-to="4"></li>

//                         </ol>

//                         {/* <!-- Wrapper for slides --> */}
//                         <div class="carousel-inner">
                           

//                             <div class="item ">
//                             <img src='/images/Power.jpg' alt="Redmi 9 Power"/>
//                             </div>
//                             <div className='item'>
//                                 <img src='/images/Redmi 9 Prime.jpg'></img>
//                             </div>
//                             <div class="item active">
//                             <img src='images/Mi Speaker.jpg'  alt="Redmi 9A"/>
//                             </div>
//                             <div class="item ">
//                             <img src='/images/Mi_neckBand.jpg' width="100%" alt="MI Bletooth speaker"/>
//                             </div>
//                         </div>

//                         {/* <!-- Left and right controls --> */}
//                         <a class="left carousel-control" href="#myCarousel" data-slide="prev">
//                             <span class="glyphicon glyphicon-chevron-left"></span>
//                             <span class="sr-only">Previous</span>
//                         </a>
//                         <a class="right carousel-control" href="#myCarousel" data-slide="next">
//                             <span class="glyphicon glyphicon-chevron-right"></span>
//                             <span class="sr-only">Next</span>
//                         </a>
//                     </div>
                   
                   
                 
                 
//         </React.Fragment>
//         )
//     }

// }
// export default Carousel