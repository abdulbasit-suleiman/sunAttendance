import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Logo="/asset/logo.svg"
function SignUpTest() {
  const [password, setPassword]=useState("")
  const [email, setEmail]=useState("")
  const signUp=(e)=>{
    e.preventDefault();
    createUserWithEmailAndPassword(auth ,email,password)
    .then((userCredential)=>{
      console.log(userCredential)
    }).catch((error) =>{
      console.log(error)
    })

  }
  return (
    <div className="signUp" onSubmit={signUp}>
      <div className="signUpHeader">
        <h3>Sign Up Test</h3>
        <Image src={Logo}  alt=""
          width={100}
          height={100} />
        <h4 className="bold-text">Student Attendance</h4>
      </div>
      <div className="signUpForm">
        <form>
          <label for="fullName">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0009 17C15.6633 17 18.8659 18.5751 20.608 20.9247L18.766 21.796C17.3482 20.1157 14.8483 19 12.0009 19C9.15346 19 6.6535 20.1157 5.23577 21.796L3.39453 20.9238C5.13673 18.5747 8.33894 17 12.0009 17ZM12.0009 2C14.7623 2 17.0009 4.23858 17.0009 7V10C17.0009 12.6888 14.8786 14.8818 12.2178 14.9954L12.0009 15C9.23945 15 7.00087 12.7614 7.00087 10V7C7.00087 4.31125 9.12318 2.11818 11.784 2.00462L12.0009 2ZM12.0009 4C10.4032 4 9.09721 5.24892 9.00596 6.82373L9.00087 7V10C9.00087 11.6569 10.344 13 12.0009 13C13.5986 13 14.9045 11.7511 14.9958 10.1763L15.0009 10V7C15.0009 5.34315 13.6577 4 12.0009 4Z"
                fill="#00923F"
              />
            </svg>
            Full Name
          </label>
          <input type="text" placeholder="Enter Full Name" />

          <label for="Email">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0009 17C15.6633 17 18.8659 18.5751 20.608 20.9247L18.766 21.796C17.3482 20.1157 14.8483 19 12.0009 19C9.15346 19 6.6535 20.1157 5.23577 21.796L3.39453 20.9238C5.13673 18.5747 8.33894 17 12.0009 17ZM12.0009 2C14.7623 2 17.0009 4.23858 17.0009 7V10C17.0009 12.7614 14.7623 15 12.0009 15C9.23945 15 7.00087 12.7614 7.00087 10V7C7.00087 4.23858 9.23945 2 12.0009 2Z"
                fill="#00923F"
              />
            </svg>
           Email
          </label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your Email" />
          <label for="matricNo">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0009 17C15.6633 17 18.8659 18.5751 20.608 20.9247L18.766 21.796C17.3482 20.1157 14.8483 19 12.0009 19C9.15346 19 6.6535 20.1157 5.23577 21.796L3.39453 20.9238C5.13673 18.5747 8.33894 17 12.0009 17ZM12.0009 2C14.7623 2 17.0009 4.23858 17.0009 7V10C17.0009 12.7614 14.7623 15 12.0009 15C9.23945 15 7.00087 12.7614 7.00087 10V7C7.00087 4.23858 9.23945 2 12.0009 2Z"
                fill="#00923F"
              />
            </svg>
            Matric Number
          </label>
          <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your MatricNO" />


          <div className="signUpHeader">
              <button className="signUpBtn" type="submit">Create Acc </button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUpTest;
