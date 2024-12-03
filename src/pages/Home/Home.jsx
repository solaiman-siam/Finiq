import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import WaveImg from '../../assets/images/wave2.png';
import AboutUs from '../../components/Home/AboutUs';
import CoreFrameworkPowering from '../../components/Home/CoreFrameworkPowering';
import ExpowerOthers from '../../components/Home/ExpowerOthers';
import Hero from '../../components/Home/Hero';
import OurPartners from '../../components/Home/OurPartners';

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Hero id="heroSection"></Hero>
      <CoreFrameworkPowering></CoreFrameworkPowering>
      <div className="relative h-full">
        <ExpowerOthers></ExpowerOthers>
        <OurPartners></OurPartners>
        <img className="absolute top-0 left-0 -z-[5]" src={WaveImg} alt="" />
      </div>
      <AboutUs></AboutUs>
    </div>
  );
}

export default Home;
