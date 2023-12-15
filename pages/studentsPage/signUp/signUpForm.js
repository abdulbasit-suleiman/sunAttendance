import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { auth } from "@/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
const Logo = "/asset/logo.svg";


function SignUp() {
  const [matricNo, setMatricNo] = useState("");
  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="signUp" onSubmit={signUp}>
      <div className="signUpHeader">
        <Image src={Logo} alt="" width={100} height={100} />
        <h4 className="bold-text">Student Attendance</h4>
        <h3 style={{ margin: "2.2rem 0" }}>Sign In</h3>
    
        <h3>Sign Up As Student</h3>
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
            Full Name (Surname in capital letters)
          </label>
          <input type="text" placeholder="Enter Full Name" />

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
          <input
            type="text"
            value={matricNo}
            onChange={(e) => setMatricNo(e.target.value)}
            placeholder="Enter your matric no"
          />

          <label for="schoolmailAcc">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"
                fill="#00923F"
              />
            </svg>
            School Mail Account
          </label>
          <input type="email" placeholder=" Enter School Account" />

          <label for="college">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2L0 9L12 16L22 10.1667V17.5H24V9L12 2ZM3.99902 13.4905V18.0001C5.82344 20.429 8.72812 22.0001 11.9998 22.0001C15.2714 22.0001 18.1761 20.429 20.0005 18.0001L20.0001 13.4913L12.0003 18.1579L3.99902 13.4905Z"
                fill="#00923F"
              />
            </svg>
            College
          </label>
          <input type="text" placeholder=" Enter your College" />

          <label for="department">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 11.3333L0 9L12 2L24 9V17.5H22V10.1667L20 11.3333V18.0113L19.7774 18.2864C17.9457 20.5499 15.1418 22 12 22C8.85817 22 6.05429 20.5499 4.22263 18.2864L4 18.0113V11.3333ZM6 12.5V17.2917C7.46721 18.954 9.61112 20 12 20C14.3889 20 16.5328 18.954 18 17.2917V12.5L12 16L6 12.5ZM3.96927 9L12 13.6846L20.0307 9L12 4.31541L3.96927 9Z"
                fill="#00923F"
              />
            </svg>
            Department
          </label>
          <input type="text" placeholder=" Enter your Department" />

          <label for="sex">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"
                fill="#00923F"
              />
            </svg>
            Sex
          </label>
          <div className="sexOption">
            <select>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>

          <div className="signUpHeader">
            <Link href="./signUpAuth">
              {" "}
              <button className="signUpBtn">Save info</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
export default SignUp;