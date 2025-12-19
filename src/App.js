import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-image-lightbox/style.css';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';
import Navigation from './module/Nav';
import About from './module/About';
import CountdownTimer from './module/CountdownTimer';
import Place from './module/Place';
import GuestBook from './module/GuestBook';
import Footer from './module/Footer';
import Hero from './module/Hero';
import Timeline from './module/Timeline';
import { song } from './assets';
import ReactHowler from 'react-howler';
import Modals from './components/Modals';
import Galeri from './module/Galeri';
import Payment from './module/Payment';

function App() {
  return (
    <div className="wrapper">
      {/* <Navigation /> */}
      <Hero />
      <About />
      <Galeri />
      {/* <Timeline /> */}
      <CountdownTimer />
      <Place />
      <GuestBook />
      <Payment />
      <Footer />
      <Modals />
      <ReactHowler src={song} playing={true} loop={true} volume={0.3} />
    </div>
  );
}

export default App;
