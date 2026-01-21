import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import HeroCarousel from './components/HeroCarousel';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <HeroCarousel />
    <div className="d-flex flex-column min-vh-100">
      <Container fluid className="flex-grow-1">

      </Container>
      <Footer myProfile={{
        avatar: '/imgages/ltb.jpg',
        name: 'Ngo Quynh Anh',
        email: 'mka251099@gmail.com'
      }} />
    </div>
    </>
  );
}

export default App;
