
import Image from "next/image";
import Link from "next/link";
const Logo = "/asset/logo.svg"
function signInOption() {

    return (
        <div className="signUp" >
         <Link href="#">   <div className="back"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z" fill="#00923F"/>
</svg>Back
</div></Link>
            <div className="signUpHeader">
                <Image src={Logo} alt=""
                    width={100}
                    height={100} />
                <h4 className="bold-text">STUDENT SIGNIN</h4>
            </div>

            <div className="optionContainer">
                <div className="boxcContainer">
                    <Link href="/studentsPage/signIn/signInForm">
                    Face Authenticaton
                    </Link>
                </div>
                <div  className="or">OR</div>
                <div className="boxcContainer">
                    <Link href="#">
                    Biometric Authenticaton 
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default signInOption;
