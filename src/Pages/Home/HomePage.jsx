import HeroSection from '../../Components/heroSection/HeroSection'
import HomePageProductCard from '../../Components/homePageProductCard/HomePageProductCard'
import Track from '../../Components/track/Track'
import Layout from '../../Components/Layout/Layout'

const HomePage = () => {
  return (
    <Layout>
      <HeroSection />
      <HomePageProductCard />
      <Track />
    </Layout>
  )
}

export default HomePage