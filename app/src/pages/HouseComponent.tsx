import React, { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import styles from "../styles/houseComponent.module.css"
import LastComponent from '../components/LastComponent'

const HouseComponent = () => {
  const topContainer: any = useRef();
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")

  useEffect(() => {
    topContainer.current.scrollIntoView({ block: "start", behavior: 'smooth' });
  }, []);

  const handleClick = ()=>{
    console.log(name,email,phone);
  }

  return (<div className={styles.bg} ref={topContainer}>
    <div className={styles.black}>
      <Navbar />
    </div>

    <div className={styles.container1}>
      <img className={styles.container1_img} src="/propertyHouse.png" alt="" />
      <img className={styles.container1_img} src="/Gallery.png" alt="" />
      <div className={styles.container1_desc}>
        <h1 className={styles.container1_desc_heading}>Description</h1>
        <hr className={styles.container1_desc_line} />
        <p className={styles.container1_desc_para}>At vero eos et iusto odio dignissimos ducimus, qui haec putat, ut ipsi auctori huius disciplinae placet: constituam, quid sit numeranda nec me ab illo inventore veritatis et expedita distinctio nam libero tempore, cum memoriter, tum etiam ac ratione.

          Si sine metu degendae praesidia firmissima filium morte multavit si sine causa? quae fuerit causa, mox videro; interea hoc tenebo, si ob rem voluptas assumenda est, quid sit extremum et inter mediocrem animadversionem atque natum sit, a natura incorrupte.</p>
      </div>
      <div className={styles.container1_desc}>
        <h1 className={styles.container1_desc_heading}>Features</h1>
        <hr className={styles.container1_desc_line} />
        <div className={styles.container1_main}>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
          <span className={styles.container1_span}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4161 0.00514317 15.9949 3.58385 16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8ZM8.05467 11.6593L12.618 5.46667C12.7723 5.27572 12.8091 5.01545 12.7139 4.78918C12.6187 4.56291 12.4069 4.40726 12.1625 4.38403C11.9182 4.36079 11.6808 4.47373 11.5447 4.678L7.39333 10.312L4.676 8.138C4.38844 7.90788 3.96879 7.95444 3.73867 8.242C3.50855 8.52956 3.55511 8.94921 3.84267 9.17933L7.10133 11.7847C7.24379 11.896 7.42501 11.9455 7.60428 11.9219C7.78355 11.8983 7.94584 11.8037 8.05467 11.6593Z" fill="#FFAC12" />
            </svg>
            <p className={styles.container1_desc_para}>Air Conditioning</p>
          </span>
        </div>
      </div>
    </div>
    <div className={styles.form} >
      <div className={styles.form_detail}>
        <img className={styles.form_img} src="/avatar.png" alt="" />
        <div className={styles.form_name} >
          <span>Aashna Metha</span>
          <span>View Profile</span>
        </div>
      </div>
      <input className={styles.input} onChange={(e) => setName(e.target.value)} type="name" placeholder="Name" id="name" />
      <input className={styles.input} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" />
      <input className={styles.input} onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="Phone" id="phone" />
      <div className={styles.lastCol}>
        <span onClick={handleClick} className={styles.lastCol_span}>LEARN MORE</span>
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
    </div >
    <LastComponent />
  </div>)
}

export default HouseComponent