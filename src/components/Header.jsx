import Linkedin from "/images/home-logo.svg";
import Search from "/images/search-icon.svg";
import Home from "/images/nav-home.svg";
import Network from "/images/nav-network.svg";
import Jobs from "/images/nav-jobs.svg";
import Messaging from "/images/nav-messaging.svg";
import Notifications from "/images/nav-notifications.svg";
import { useSelector } from "react-redux";
import Arrow from "/images/down-icon.svg";
import Work from "/images/nav-work.svg";
import UserImg from "/images/user.svg";
import { signOut } from "firebase/auth";
import { Auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
function Header() {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const logOut = () => {
    signOut(Auth);
    navigate("/");
  };
  return (
    <header className="flex justify-evenly items-center bg-white sticky top-0 z-50 ">
      <div className="flex items-center gap-3">
        <img src={Linkedin} alt="Linkedin image" />
        <div className="relative">
          <input
            className="text-[#000000e5] bg-[#EEF3F8] p-[6px] pl-8"
            placeholder="Search"
          />
          <img
            className="absolute top-1/2 -translate-y-1/2 left-2"
            src={Search}
            alt="Search icon"
          />
        </div>
      </div>
      <div className="flex items-center gap-6 ">
        <div className="link border-b-2  border-black w-[70px] ">
          <img className="w-7" src={Home} alt="home icon" />
          <p className="text-sm">Home</p>
        </div>
        <div className="link ">
          <img className="w-7" src={Network} alt="network icon" />
          <p className="text-sm">My Network</p>
        </div>
        <div className="link ">
          <img className="w-7" src={Jobs} alt="jobs icon" />
          <p className="text-sm">Jobs</p>
        </div>
        <div className="link ">
          <img className="w-7" src={Messaging} alt="messaging icon" />
          <p className="text-sm">Messaging</p>
        </div>
        <div className="link ">
          <img className="w-7" src={Notifications} alt="notifications icon" />
          <p className="text-sm">Notifications</p>
        </div>
        <div className="link pr-4 md:border-r relative group block p-0 md:pb-2">
          {user?.photoURL ? (
            <>
              <img
                className="w-7 rounded-full"
                src={user?.photoURL}
                alt="user Photo"
              />
              <button className="sign-out group-hover:block" onClick={logOut}>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <img
                className="w-7 rounded-full"
                src={UserImg}
                alt="user Photo"
              />
              <button
                className="sign-out group-hover:block"
                onClick={() => navigate("/")}
              >
                Sign in
              </button>
            </>
          )}
          <span className="text-sm flex gap-1 items-center justify-center">
            me
            <img src={Arrow} alt="arrow" />
          </span>
        </div>

        <div className="link ">
          <img className="w-7 " src={Work} alt="work icon" />
          <span className="text-sm flex gap-1 items-center justify-center">
            Work
            <img src={Arrow} alt="arrow" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
