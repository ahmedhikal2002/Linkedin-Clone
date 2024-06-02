import { useEffect } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../Firebase";
import Article from "./Article";
import Loader from "/images/loader.svg";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_POST } from "../Redux/Actions/Actions";

function Articles() {
  const collectionRef = collection(db, "posts");
  const quaryRef = query(collectionRef, orderBy("actor.created", "desc"));
  const loading = useSelector((state) => state.article.load);
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.article.post);

  useEffect(() => {
    onSnapshot(quaryRef, (data) => {
      let posts = data.docs.map((doc) => {
        return {
          id: doc.id,
          data: doc.data(),
        };
      });

      dispatch({ type: CREATE_POST, payload: posts });
    });
  }, []);

  return (
    <div className="mt-4">
      <div className="flex justify-center">
        {loading && <img className="w-20 h-20 " src={Loader} />}
      </div>
      {articles.length === 0 ? (
        <p className="text-center text-[12px] font-bold">
          there are no articles
        </p>
      ) : (
        articles.map((post) => <Article key={post.id} post={post.data} />)
      )}
    </div>
  );
}

export default Articles;
