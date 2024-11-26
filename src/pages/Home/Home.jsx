import CoreFrameworkPowering from "../../components/Home/CoreFrameworkPowering"
import Hero from "../../components/Home/Hero"
import ExpowerOthers from "../../components/Home/ExpowerOthers"
import WaveImg from '../../assets/images/wave2.png'
import OurPartners from "../../components/Home/OurPartners"
import AboutUs from "../../components/Home/AboutUs"

function Home() {
  return (
    <div>
      <Hero></Hero>
      <CoreFrameworkPowering></CoreFrameworkPowering>
      <div className="relative h-full">
        <ExpowerOthers></ExpowerOthers>
        <OurPartners></OurPartners>
        <img className="absolute top-0 left-0 -z-[5]" src={WaveImg} alt="" />
      </div>
      <AboutUs></AboutUs>
    </div>
  )
}

export default Home