import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import { useEffect } from "react";
import { Auth } from "./Firebase";
import { useDispatch } from "react-redux";
import { SET_USER } from "./Redux/Actions/Actions";
import RequireAuth from "./components/RequireAuth";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        dispatch({ type: SET_USER, user: userAuth });
      } else {
        dispatch({ type: SET_USER, user: null });
      }
    });
  }, [dispatch]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
