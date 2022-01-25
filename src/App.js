import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './Navi';
import Carousel from './Carousel';
import Gallery from './Gallery';
import Card from './Card';

function App() {
  return (
    <div className="App">
 
      <Navi></Navi>
      <Carousel></Carousel>
      <Gallery propid='event'  proptitle='Review Event' propfolder='event' ></Gallery>
      <Card></Card>
    </div>
  );
}

export default App;
