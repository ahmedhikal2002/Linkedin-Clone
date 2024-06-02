import Photo from "/images/photo.svg";
import Background from "/images/card-bg.svg";
import Connection from "/images/widget-icon.svg";
import Items from "/images/item-icon.svg";
import Plus from "/images/plus-icon.svg";
import { useSelector } from "react-redux";
function LeftSection() {
  const user = useSelector((state) => state.user.user);
  return (
    <section className="w-full md:w-[300px] ">
      <div className="box  w-full">
        <div className="w-full h-14 relative">
          <img src={Background} className="w-full h-full" />
          <div className="camera">
            <img src={Photo} alt="add a photo" className=" " />
          </div>
        </div>
        <div className="border-bottom mt-10 flex flex-col gap-3 text-center pb-4 ">
          <strong>Welcome, {user?.displayName}</strong>
          <a className="text-blue-600 font-normal">Add a photo</a>
        </div>
        <div className="smooth item">
          <div>
            <p className="text-gray-600">Connections</p>
            <span>Grow your network</span>
          </div>
          <img src={Connection} />
        </div>
        <div className="smooth item  justify-start gap-2 p-2  border-t border-gray-300 mb-0 ">
          <img src={Items} />
          My Items
        </div>
      </div>

      <div className="box mt-4 w-full">
        <div className="p-3">
          <p className="p-hover">Groups</p>
          <div className="flex-between">
            <p className="p-hover my-2 flex-1">Events</p>
            <img src={Plus} />
          </div>
          <p className="p-hover">Follows Hashtags</p>
        </div>
        <div className="smooth item  p-2  border-t border-gray-300 m-0">
          Discover more
        </div>
      </div>
    </section>
  );
}

export default LeftSection;
