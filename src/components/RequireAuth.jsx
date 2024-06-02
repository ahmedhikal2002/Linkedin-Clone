import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function RequireAuth({ children }) {
  const user = useSelector((state) => state.user.user);

  const navigat = useNavigate();
  useEffect(() => {
    if (!user) {
      navigat("/", { replace: true });
      return;
    }
  }, [user]);
  return children;
}

export default RequireAuth;
