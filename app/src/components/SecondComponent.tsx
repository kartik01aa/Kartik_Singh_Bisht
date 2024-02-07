import styles from "../styles/secondComponent.module.css";

const SecondComponent = () => {
  return (<>
    <div className={styles.container}>
      <img src="/component1.png" alt="" className={styles.container_img} />
      <div className={styles.main} >
          <img src="/rectangle.png" alt="" />
        <h1 className={styles.container_heading}>You are in good hands</h1>
        <span className={styles.container_paras}>
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta
          aperiri, altera occulta quaedam et voluptatem accusantium doloremque.
        </span>
        <div className={styles.lastCol}>
          <span className={styles.lastCol_span}>LEARN MORE</span>
          <svg
            width="20"
            height="10"
            viewBox="0 0 20 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.7558 4.22568L15.7742 0.244013C15.5358 0.00575645 15.1775 -0.0655052 14.8661 0.0634481C14.5548 0.192401 14.3517 0.496183 14.3517 0.83318V3.35651C14.3517 3.47157 14.2584 3.56485 14.1433 3.56485H1.25C0.559644 3.56485 0 4.12449 0 4.81485C0 5.5052 0.559644 6.06485 1.25 6.06485H14.1433C14.2584 6.06485 14.3517 6.15812 14.3517 6.27318V8.79651C14.3517 9.13351 14.5548 9.43729 14.8661 9.56625C15.1775 9.6952 15.5358 9.62394 15.7742 9.38568L19.7558 5.40401C20.0812 5.0786 20.0812 4.5511 19.7558 4.22568Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
    </>);
};

export default SecondComponent;