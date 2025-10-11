import Topbar from "./components/landingPage/topbar"
import Hero from "./components/landingPage/herosection"
import CategorySection from "./components/landingPage/categorysection"
import Circle from "./components/landingPage/bulatbulat"
import TrendingSection from "./components/landingPage/trending"
import GallerySection from "./components/landingPage/gambar"
import Footer from "./components/landingPage/footer"

export default function Home() {
  return (
    <div>
      <Topbar/>
      <Hero/>
      <CategorySection/>
      <Circle/>
      <TrendingSection/>
      <GallerySection/>
      <Footer/>
    </div>
  )
}
