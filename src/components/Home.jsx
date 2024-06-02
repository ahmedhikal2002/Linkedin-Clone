import Header from "./Header";
import { NavLink } from "react-router-dom";
import LeftSection from "./LeftSection";
import Main from "./Main";
import RightSection from "./RightSection";

function Home() {
  return (
    <>
      <Header />
      <NavLink className="mt-4 mb-6 text-center block underline ">
        <span to="/home " className="text-blue-800 underline">
          Hiring in a hurry? -
        </span>
        Find talented pros in record time with Upwork and keep business moving.
      </NavLink>
      <div className="flex flex-col md:flex-row items-start gap-5 p-3 flex-wrap ">
        <LeftSection />
        <Main />
        <RightSection />
      </div>
    </>
  );
}

export default Home;
