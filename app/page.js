import Topbar from "./components/landingPage/topbar"
import Hero from "./components/landingPage/herosection"
import CategorySection from "./components/landingPage/categorysection"

export default function Home() {
  return (
    <div>
      <Topbar/>
      <Hero/>
      <CategorySection/>
    </div>
  )
}
