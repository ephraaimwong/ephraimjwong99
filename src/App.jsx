import './App.css'
import BreadCrumbs from './components/BreadCrumbs';
import Hero from './components/Hero';
import PhotoCarousel from './components/Carousel/PhotoCarousel';
import WorkExperience from './components/WorkExperience';
import PageScrollProgress from './components/PageScrollProgress';
import BrainPacman from './components/Pacman';
import TheCube from './components/TheCube';
// import Timeline from './components/Timeline';

function App() {
  return (
    <div className=' md:ml-24 md:mr-24'>
      <PageScrollProgress/>
      {/* <BreadCrumbs/> */}
      <Hero/>
      {/* <BrainPacman/> */}
      <PhotoCarousel/>
      <TheCube/>
      <WorkExperience/>
    </div>
  )
}

export default App
