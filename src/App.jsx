import './App.css'
import BreadCrumbs from './components/BreadCrumbs';
import Hero from './components/Hero';
import PhotoCarousel from './components/Carousel/PhotoCarousel';
import WorkExperience from './components/WorkExperience';
import PageScrollProgress from './components/PageScrollProgress';
import BrainPacman from './components/Pacman';
import TheCube from './components/TheCube';
import SocialSideBar from './components/SocialSideBar';
// import Timeline from './components/Timeline';

function App() {
  return (
    <>
      <SocialSideBar/>
      <PageScrollProgress/>
    <div className=' md:ml-24 md:mr-24'>
      <Hero/>
      <div className='space-y-[20vh]'>
        <PhotoCarousel/>
        <TheCube/>
        <WorkExperience/>

      </div>
      {/* <BreadCrumbs/> */}

    </div>
    </>
  )
}

export default App
