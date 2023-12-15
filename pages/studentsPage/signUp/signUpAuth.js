import SignUpAuthCapture from "@/component/signUpAuth";
import Image from "next/image";

const Logo = "/asset/logo.svg";
function SignUpAuth() {
  return (
    <div className="signUpAuth">
      <div className="signUpHeader">
        <h3>Sign Up</h3>
        <Image src={Logo} alt="" width={100} height={100} />
        <h4 className="bold-text">Student Attendance</h4>
        <h4 className="bold-text">Face Recognition</h4>
      </div>
      <div>
      <SignUpAuthCapture />
      </div>
    </div>
  );
}
export default SignUpAuth;
