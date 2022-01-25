import React,{Component} from "react";
import Listthumb from './Listthumb';
import './Gallery.css'

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state ={
            imgfolder : this.props.propfolder,
        }
    }
    render(){
        return(
            <section id={this.props.propid}className='container-lg'>
                    <h3 className='gallerytitle'>{this.props.proptitle}</h3>
                <div className="d-md-flex flew-row text-md-center">

                    <ul className='flex-grow-1 row m-0'>

                     <Listthumb col='col-md-4' colimg='1.jpg' imgsrcfolder={this.props.propfolder} ></Listthumb>
                     <Listthumb col='col-md-4' colimg='2.jpg' imgsrcfolder={this.props.propfolder} ></Listthumb>
                     <Listthumb col='col-md-4' colimg='3.jpg' imgsrcfolder={this.props.propfolder} ></Listthumb>
                    </ul>
                </div>
                
            </section>
          
        )
    }

}

export default Gallery;