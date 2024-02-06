import Component1Heading from "../components/Component1Heading"
import ListingPopUp from "../components/ListingPopUp"
import Navbar from "../components/Navbar"
import styles from "../styles/home.module.css"

const Home = () => {
  return (
    <div className={styles.container}>
     <img src={process.env.PUBLIC_URL + "./Object.jpg"} className={styles.bg_image}  alt="img.jpg" />
     <Navbar/>
     <Component1Heading/>
     <ListingPopUp/>
    </div>
  )
}

export default Home