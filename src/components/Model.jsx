import { useDispatch, useSelector } from "react-redux";
import Close from "/images/close-icon.svg";
import UserImg from "/images/user.svg";
import Img from "/images/share-image.svg";
import Video from "/images/share-video.svg";
import { useState } from "react";
import ReactPlayer from "react-player";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { Storage, db } from "../Firebase";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { SET_LOADING } from "../Redux/Actions/Actions";

function Model({ handelClick }) {
  const [post, setPost] = useState("");
  const [media, setMedia] = useState("");
  const [imgLink, setImgLink] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const user = useSelector((state) => state.user.user);

  const dispatch = useDispatch();
  const handelChange = (e) => {
    const img = e.target.files[0];
    if (img === "" || img === undefined) {
      alert(`the image may be correpted Please choose anthor image`);
    } else {
      setImgLink(img);
    }
  };

  const Rest = () => {
    setImgLink("");
    setPost("");
    setVideoLink("");
  };

  const postApi = (payload) => {
    if (payload.img) {
      dispatch({ type: SET_LOADING, payload: true });
      const stroageRef = ref(Storage, `images/ ${payload.img.name}`);
      const uploadImg = uploadBytesResumable(stroageRef, payload.img);
      uploadImg.on(
        "state_changed",
        (snapshoot) => {
          const progress =
            Math.round(snapshoot.bytesTransferred / snapshoot.totalBytes) * 100;
          console.log(
            "Uploaded====================================>",
            progress
          );
        },
        (err) => alert(err.message),
        () => {
          getDownloadURL(uploadImg.snapshot.ref).then((imgURL) => {
            const collectionRef = collection(db, "posts");
            addDoc(collectionRef, {
              actor: {
                email: payload.user.email,
                name: payload.user.displayName,
                photo: payload.user.photoURL,
                created: Timestamp.now(),
              },
              comments: [],
              articles: {
                img: imgURL,
                video: payload.video,
                post: payload.post,
              },
            });
          });
          dispatch({ type: SET_LOADING, payload: false });
        }
      );
    } else {
      const collectionRef = collection(db, "posts");
      addDoc(collectionRef, {
        actor: {
          email: payload.user.email,
          name: payload.user.displayName,
          photo: payload.user.photoURL,
          created: Timestamp.now(),
        },
        comments: [],
        articles: {
          img: payload.img,
          video: payload.video,
          post: payload.post,
        },
      });
    }
  };
  const handelPost = () => {
    const payload = {
      img: imgLink,
      video: videoLink,
      user: user,
      post: post,
    };
    postApi(payload);

    Rest();

    handelClick();
  };

  return (
    <section className="w-full  h-full bg-[#000000cc]  fixed inset-0 ">
      <div className="model">
        <div className="flex-between  border-b border-gray-300 p-4">
          Create Post
          <button onClick={handelClick} className="model-btn">
            <img src={Close} alt="Close" />
          </button>
        </div>

        <div className="flex-gap p-4">
          {user?.photoURL ? (
            <img src={user.photoURL} className="avater" />
          ) : (
            <img src={UserImg} className="avater" />
          )}
          <strong> {user?.displayName}</strong>
        </div>
        <div className="content p-4 ">
          <textarea
            placeholder="What do you want to talk about"
            className="resize-none w-full min-h-[100px] "
            autoFocus
            value={post}
            onChange={(e) => setPost(e.target.value)}
          />
          {media === "image" ? (
            <>
              <input
                type="file"
                id="file"
                className="hidden"
                onChange={handelChange}
              />
              <label htmlFor="file" className="text-center block">
                Select an image to share
              </label>
              {imgLink && (
                <img
                  className="w-full"
                  src={URL.createObjectURL(imgLink)}
                  alt="Sharing image"
                />
              )}
            </>
          ) : (
            media === "video" && (
              <>
                <input
                  type="text"
                  id="video"
                  className="border w-full text-black p-2"
                  placeholder="Please enter the video link"
                  onChange={(e) => setVideoLink(e.target.value)}
                />
                {videoLink && <ReactPlayer width="100%" url={videoLink} />}
              </>
            )
          )}
        </div>

        <div className="flex-between px-4 ">
          <div className="flex-gap">
            <button className="model-btn" onClick={() => setMedia("image")}>
              <img src={Img} />
            </button>
            <button className="model-btn" onClick={() => setMedia("video")}>
              <img src={Video} />
            </button>
          </div>
          <button
            onClick={handelPost}
            className="px-3 py-1 rounded-full bg-blue-700 text-white"
            disabled={!post ? true : false}
          >
            Post
          </button>
        </div>
      </div>
    </section>
  );
}

export default Model;
