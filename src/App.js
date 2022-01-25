import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Navi';
import Carousel from './Carousel';
import Gallery from './Gallery';

function App() {
  return (
    <div className="App">
 
      <Navi></Navi>
      <Carousel></Carousel>
      <Gallery propid='event'  proptitle='Review Event' propfolder='event' ></Gallery>
      <Gallery propid='review' proptitle='Review' propfolder='review' ></Gallery>
 
    </div>
  );
}

export default App;
