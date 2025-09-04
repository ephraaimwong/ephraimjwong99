import './App.css'
import BreadCrumbs from './components/BreadCrumbs';
import Hero from './components/Hero';
import PhotoCarousel from './components/Carousel/PhotoCarousel';

function App() {
  return (
    <div className=" bg-primary-bg">
      <BreadCrumbs/>
      <Hero/>
      <PhotoCarousel/>
    </div>
  )
}

export default App
