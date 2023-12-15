import Image from "next/image";
const Logo = "/asset/logo.svg";
function SignUpAuthFailed() {
  return (
    <div className="signUpAuthFailed">
      <div className="signUpHeader">
        <h3>Sign Up</h3>
        <Image src={Logo} alt="" width={100} height={100} />
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
            d="M100 183.333C53.9762 183.333 16.6666 146.023 16.6666 100C16.6666 53.9763 53.9762 16.6667 100 16.6667C146.023 16.6667 183.333 53.9763 183.333 100C183.333 146.023 146.023 183.333 100 183.333ZM100 166.667C136.819 166.667 166.667 136.819 166.667 100C166.667 63.181 136.819 33.3334 100 33.3334C63.181 33.3334 33.3333 63.181 33.3333 100C33.3333 136.819 63.181 166.667 100 166.667ZM100 88.215L123.57 64.6447L135.355 76.4298L111.785 100L135.355 123.57L123.57 135.355L100 111.785L76.4297 135.355L64.6446 123.57L88.215 100L64.6446 76.4298L76.4297 64.6447L100 88.215Z"
            fill="#FF2222"
          />
        </svg>

        <div className="completeAuth">
          <h4>Authentication Failed</h4>
        </div>
      </div>
    </div>
  );
}
export default SignUpAuthFailed;
1;
