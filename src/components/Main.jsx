import { useSelector } from "react-redux";
import Photo from "/images/photo-icon.svg";
import Video from "/images/video-icon.svg";
import Event from "/images/event-icon.svg";
import UserImg from "/images/user.svg";
import Article from "/images/article-icon.svg";
import { useState } from "react";
import Model from "./Model";
import Articles from "./Articles";

function Main() {
  const [openModel, setOpenModel] = useState(false);
  const user = useSelector((state) => state.user.user);

  const handelClick = () => {
    setOpenModel(!openModel);
  };

  return (
    <section className="w-full md:flex-1  ">
      <div className="box p-3 w-full flex gap-2 flex-col">
        <div className="flex-gap items-stretch">
          {user?.photoURL ? (
            <img src={user?.photoURL} className=" w-12 h-12 rounded-full" />
          ) : (
            <img src={UserImg} className="avater" />
          )}
          <button className="start-post" onClick={handelClick}>
            Start a post
          </button>
        </div>
        <div className="flex-between justify-around my-2  flex-wrap">
          <div className="flex-gap smooth element ">
            <img src={Photo} />
            <p>Photo</p>
          </div>
          <div className="flex-gap smooth element">
            <img src={Video} />
            <p>Video</p>
          </div>
          <div className="flex-gap smooth element">
            <img src={Event} />
            <p>Event</p>
          </div>
          <div className="flex-gap smooth element">
            <img src={Article} />
            <p>Write article</p>
          </div>
        </div>
      </div>

      <Articles />

      {openModel && <Model handelClick={handelClick} />}
    </section>
  );
}

export default Main;
