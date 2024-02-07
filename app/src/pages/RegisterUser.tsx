import react, { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import styles from "../styles/loginUser.module.css"
import { usePostRegisterCustomerMutation } from '../services/api';

const RegisterUser = () => {
     const navigate = useNavigate()
     const [name, setName] = useState("")
     const [email, setEmail] = useState("")
     const [password, setPassword] = useState("")
     const [postRegisterCustomer] = usePostRegisterCustomerMutation()

     const handleSubmit = async (e: any) => {
          e.preventDefault();
          postRegisterCustomer({name:name, email:email,password:password})
          navigate("/loginUser")
     };

     return (<div className={styles.main}>
          <div className={styles.background}>
               <div className={styles.shape}></div>
               <div className={styles.shape}></div>
          </div>
          <form>
               <h3>Login Here</h3>

               <label htmlFor="username">Username</label>
               <input onChange={(e)=>setName(e.target.value)} type="text" placeholder="Email " id="username" />
               
               <label htmlFor="email">Email</label>
               <input onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="email" id="email" />

               <label htmlFor="password">Password</label>
               <input onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" id="password" />

               <button onClick={handleSubmit} >Register</button>
               <div className={styles.signup} >
                    Already had a account, 
                    <Link to="/loginUser" ><p className={styles.signupLink}>Login</p></Link>
               </div>
          </form>
     </div>)
}        


export default RegisterUser