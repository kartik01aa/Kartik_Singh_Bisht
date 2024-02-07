import react, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import styles from "../styles/loginUser.module.css"
import { usePostRegisterCustomerMutation } from '../services/api';

const LoginUser = () => {
     const navigate = useNavigate()
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [postRegisterCustomer] = usePostRegisterCustomerMutation()

     const handleSubmit = async (e: any) => {
          e.preventDefault();
          postRegisterCustomer({email:email,password:password})
          navigate("/")
     };

     return (<div className={styles.main}>
          <div className={styles.background}>
               <div className={styles.shape}></div>
               <div className={styles.shape}></div>
          </div>
          <form>
               <h3>Login Here</h3>

               <label htmlFor="email">Email</label>
               <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" id="email" />

               <label htmlFor="password">Password</label>
               <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" id="password" />

               <button onClick={handleSubmit}>Log In</button>
               <div className={styles.signup} >
                    New here, 
                    <Link to="/registerUser" ><p className={styles.signupLink}>Sign Up</p></Link>
               </div>
          </form>
     </div>)
}


export default LoginUser
