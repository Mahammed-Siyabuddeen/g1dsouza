import Image from 'next/image'
import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Category from './components/Category/Category'
import Contact from './components/Contact/Contact'
import Drive from './components/Drive/Drive'
import Footer from './components/footer/Footer'
import Frame from './components/Frame/Frame'
import Header from './components/Header/Header'
import Video from './components/Video/Video'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <Banner />
      <Cards />
      <About />
      <Video />
      <Category />
      <Contact />
      <Drive />
      <Frame/>
    </>
  )
}
