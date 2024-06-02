import Logo from "/images/login-logo.svg";
import LoginImg from "/images/login-hero.svg";
import Google from "/images/google.svg";
import { signInWithPopup } from "firebase/auth";
import { Auth, Provider } from "../Firebase";
import { useDispatch, useSelector } from "react-redux";
import { SET_USER } from "../Redux/Actions/Actions";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const SignInWithGoogle = async () => {
    await signInWithPopup(Auth, Provider)
      .then((authUser) => {
        dispatch({ type: SET_USER, user: authUser.user });
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  useEffect(() => {
    user && navigate("/home", { replace: true });
  }, [user]);

  return (
    <>
      <nav className="flex justify-between py-6 px-3 ">
        <div className="w-28 ">
          <img className="w-full object-cover" src={Logo} alt="image logo" />
        </div>
        <div className="flex items-center gap-4">
          <button className="smooth btn join">Join Now</button>
          <button className="smooth btn sign">Sign in</button>
        </div>
        <div className="hidden lg:block" />
      </nav>
      <section className="login-hero">
        <div className="title">
          <h1 className="heading ">Welcome to your professional community</h1>
          <button className="smooth login-hero-btn" onClick={SignInWithGoogle}>
            <img src={Google} alt="google image" />
            Sign In With Google
          </button>
        </div>
        <div className="flex-1 mt-10 xl:mt-0">
          <img className="w-full" src={LoginImg} alt="Login image" />
        </div>
      </section>
    </>
  );
}

export default Login;
// #0A66C2
