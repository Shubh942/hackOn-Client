import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import SignIn from "./components/signInPage/SignInPage";
import SignUp from "./components/signUpPage/SignUpPage";
import HomePage from "./components/homePage/HomePage";
import BrowsePage from "./components/browsePage/BrowserPage";
import Room from "./components/Stream/Room";
import Stream from "./components/Stream/Stream";
import Cart from "./components/Cart/Cart";

import { ProtectedRoute, UserSignedIn } from "./helpers";

import useAuthListener from "./hooks";

function App() {
  const { user } = useAuthListener();

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path={ROUTES.HOME} element={<HomePage />} />
          <Route path={ROUTES.SIGN_IN} element={<SignIn />} />
          <Route path={ROUTES.SIGN_UP} element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/room/:roomID" element={<Room />} />
          <Route path="/stream" element={<Stream />} />
          <Route path={ROUTES.BROWSE} element={<BrowsePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
