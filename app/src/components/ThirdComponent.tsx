import styles from "../styles/thirdComponent.module.css";
import data from '../data.json'
import { useNavigate } from "react-router-dom";

const ThirdComponent = () => {
     const navigate = useNavigate()
     const handleClick = ()=>{
          navigate("/houseComponent")
     }

     return (<div className={styles.container20}>
          <div className={styles.container2} >
               <img src="/rectangle.png" alt="" />
               <h1 className={styles.container2_heading}>Find your next place to live</h1>
               <div className={styles.container2_allBtn}>
                    <span className={styles.container2_btn}>Looking for<img className={styles.img} src="/arrow-down-1.png" alt="" /></span>
                    <span className={styles.container2_btn}>Location<img className={styles.img} src="/arrow-down-1.png" alt="" /></span>
                    <span className={styles.container2_btn}>Property type<img className={styles.img} src="/arrow-down-1.png" alt="" /></span>
                    <span className={styles.container2_btn}>Price<img className={styles.img} src="/arrow-down-1.png" alt="" /></span>
               </div>
          </div>
          <div className={styles.container22}>
               {
                    data.map((d) => {
                         return <div onClick={handleClick} className={styles.container22_card}>
                              <img className={styles.container22_img} src={`/${d.image}.png`} alt="" />
                              <h1 className={styles.container22_title}>{d.title}</h1>
                         </div>
                    })
               }
          </div>
     </div>
     )
}

export default ThirdComponent