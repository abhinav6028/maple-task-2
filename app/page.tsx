import Image from 'next/image'
import Navbar from './components/Navbar'
import Banner from './components/HomePage/Banner'
import Corousal from './components/HomePage/Corousal/corousal'
import Banner2 from './components/HomePage/Banner2/Banner2'
import Testimonials from './components/HomePage/Testimonials/Testimonials'
import Footer from './components/HomePage/Footer/Footer'

export default function Home() {
  return (
    <div className='w-full'>
      <Navbar />
      <Banner />
      <Corousal/>
      <Banner2 />
      <Testimonials />
      <Footer />
    </div>
  )
}
