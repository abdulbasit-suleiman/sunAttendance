import Image from "next/image";
import Link from "next/link";

const Logo="/asset/logo.svg"
function SignUpAuthComplete() {
  return (
    <div className="signUpAuthComplete">
      <div className="signUpHeader">
        <h3>Sign Up</h3>
        <Image src={Logo}  alt=""
          width={100}
          height={100} />
        <h4 className="bold-text">Student Attendance</h4>
        <h4 className="bold-text" style={{ margin: "1rem .3rem" }}>
          Face Recognition
        </h4>
      </div>
      <div className="authComplete">
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M96.6834 114.666L108.45 126.432L178.996 55.8858L190.782 67.6709L108.45 150.002L55.4167 96.9692L67.2018 85.1842L84.9084 102.891L96.6834 114.666ZM96.6975 91.1017L137.969 49.8291L149.722 61.5814L108.45 102.853L96.6975 91.1017ZM73.1415 138.227L61.3664 150.002L8.33337 96.9692L20.1185 85.1842L31.8936 96.96L31.8837 96.9692L73.1415 138.227Z"
            fill="#00923F"
          />
        </svg>
        <div className="completeAuth">
            <h4>Authentication Complete</h4>
            <button className="signUpBtn" ><Link  href="/studentsPage/signIn/signInOptions">Proceed</Link></button>
            
        </div>
      </div>
    </div>
  );
}
export default SignUpAuthComplete;