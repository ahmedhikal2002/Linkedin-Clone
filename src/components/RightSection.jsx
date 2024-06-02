import Feed from "/images/feed-icon.svg";
import Hash from "/images/hash.svg";
import Arrow from "/images/right-icon.svg";
import Banner from "/images/banner-image.jpg";
function RightSection() {
  return (
    <section className=" w-full md:w-[300px] xl:w-[400px] ">
      <div className="p-2 box w-full">
        <div className="flex-between text-[14px] text-gray-400">
          Add to your feed
          <img src={Feed} />
        </div>
        <div className="flex-gap">
          <img className="w-12" src={Hash} />
          <div className="flex flex-col items-center">
            #Linkedin
            <span className="px-4 py-1 border-[3px] border-black rounded-full">
              Follow
            </span>
          </div>
        </div>
        <div className="flex-gap mt-2">
          <img className="w-12" src={Hash} />
          <div className="flex flex-col items-center">
            #Video
            <span className="px-4 py-1 border-[3px] border-black rounded-full">
              Follow
            </span>
          </div>
        </div>
        <a className="text-blue-600 font-normal text-[14px] flex-gap gap-0 my-2">
          View all recommendations
          <img src={Arrow} />
        </a>
      </div>
      <div className="box p-2 w-full mt-2">
        <img src={Banner} className="w-full object-cover" />
      </div>
    </section>
  );
}

export default RightSection;
