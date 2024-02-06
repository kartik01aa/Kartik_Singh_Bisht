import styles from "../styles/listingPopUp.module.css"

const ListingPopUp = () => {
  return (
    <div className={styles.popUp} >
     <span className={styles.popup_data} >See all listings</span>
     <img src="./path.png" alt="arrow" />
    </div>
  )
}

export default ListingPopUp