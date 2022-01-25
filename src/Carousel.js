import { UncontrolledCarousel } from 'reactstrap';
import React,{ Component} from "react";
import './Carousel.css'


const items = [
    {
      src: './banner/banner0.jpg' ,
      altText: 'event1',
  
     
    },
    {
      src: './banner/banner1.jpg',
      altText: 'event2',

 
    },
    {
      src: './banner/banner2.jpg',
      altText: 'event3',

    
    }
];
    class Carousel extends Component{
        constructor(prop){
            super(prop);
            this.state = {
    
            }
        }
        render(){
            return(
                <div id ='mybanner'>
                <UncontrolledCarousel items={items} className='img-fluid'></UncontrolledCarousel>
                </div>
            )
        }
    }
export default Carousel;