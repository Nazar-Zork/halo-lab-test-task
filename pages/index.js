import { useState } from 'react'

import Hero from '../components/Hero/Hero'
import News from '../components/News/News'
import TopSlider from '../components/TopSlider/TopSlider'
import Team from '../components/Team/Team'
import Contact from '../components/Contact/Contact'
import Quote from '../components/Quote/Quote'
import Faqs from '../components/Faqs/Faqs'
import Footer from '../components/Footer/Footer'
import NatureSlider from '../components/NatureSlider/NatureSlider'
import MobileMenu from '../components/MobileMenu/MobileMenu'

export default function Home() {
  const [activeMobMenu, setActiveMobMenu] = useState(false);
  return (
    <div className="App">
      <Hero activeMenu={activeMobMenu} setActiveMenu={setActiveMobMenu} />
      <News />
      <TopSlider />
      <Team />
      <Quote />
      <Contact />
      <Faqs />
      <NatureSlider />
      <Footer />
      <MobileMenu activeMenu={activeMobMenu} setActiveMenu={setActiveMobMenu}/>
    </div>
  )
}
