import Component1Heading from "../components/Component1Heading"
import LastComponent from "../components/LastComponent"
import ListingPopUp from "../components/ListingPopUp"
import Navbar from "../components/Navbar"
import SecondComponent from "../components/SecondComponent"
import ThirdComponent from "../components/ThirdComponent"
import styles from "../styles/home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
      <img src={process.env.PUBLIC_URL + "./Object.jpg"} className={styles.bg_image} alt="img.jpg" />
      <Navbar />
      <Component1Heading />
      <ListingPopUp />
      <SecondComponent />
      <ThirdComponent />
      <LastComponent />
    </div>
  )
}

export default Home