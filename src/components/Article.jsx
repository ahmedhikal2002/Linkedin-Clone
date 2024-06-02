/* eslint-disable react/prop-types */
import ReactPlayer from "react-player";
import Ellipsis from "/images/ellipsis.svg";
import Likeimg from "/images/like.svg";
import Love from "/images/love.svg";
import Like from "/images/like-icon.svg";
import Comment from "/images/comment-icon.svg";
import Share from "/images/share-icon.svg";
import Send from "/images/send-icon.svg";

function Article({ post }) {
  return (
    <section className="w-full ">
      <div className="box w-full mt-2 p-3 font-normal rounded-md relative">
        <div className="flex-between items-start">
          <div className="flex-gap ">
            <img src={post?.actor?.photo} className="w-12 h-12 rounded-full" />
            <div className="flex flex-col gap-0">
              <strong>{post?.actor?.name}</strong>
              <p className="text-[10px]">{post?.actor?.email}</p>
              <span className="text-[10px]">
                {post?.actor?.created.toDate().toLocaleDateString()}
              </span>
            </div>
          </div>
          <img src={Ellipsis} />
        </div>
        <div className="my-2 font-normal text-[14px]">
          {post?.articles?.post}
        </div>
        <div>
          {post?.articles?.img && (
            <img
              className="w-full h-auto rounded-md bg-slate-300"
              src={post?.articles?.img}
            />
          )}
        </div>
        <div>
          {post?.articles?.video && (
            <ReactPlayer url={post?.articles?.video} width={"100%"} />
          )}
        </div>
        <div className="flex-gap p-3 border-b border-gray-200">
          <span className="flex-gap gap-0">
            <img src={Likeimg} />
            <img src={Love} />
            100
          </span>
          <p>{post?.comments.length} comments</p>
          <p>1 share</p>
        </div>
        <div className="flex-between  ">
          <div className="element smooth flex-gap react-icon ">
            <img src={Like} />
            Like
          </div>

          <div className="element smooth flex-gap react-icon ">
            <img src={Comment} />
            Comment
          </div>

          <div className="element smooth flex-gap react-icon">
            <img src={Share} />
            Share
          </div>
          <div className="element smooth flex-gap react-icon">
            <img src={Send} />
            Send
          </div>
        </div>
      </div>
    </section>
  );
}

export default Article;
