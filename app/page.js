import About from './components/About/About'
import Banner from './components/Banner/Banner'
import Cards from './components/Cards/Cards'
import Category from './components/Category/Category'
import Contact from './components/Contact/Contact'
import Drive from './components/Drive/Drive'
import Frame from './components/Frame/Frame'
import Video from './components/Video/Video'

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
