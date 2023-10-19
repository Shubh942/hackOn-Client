import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Error, Browse, Login, Signup } from "./pages/index";
// import { ProtectedRoute, UserSignedIn } from "./helpers";

import useAuthListener from "./hooks";

const App = () => {
  const { user } = useAuthListener();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route
            path="/login"
            element={
              <UserSignedIn user={user}>
                <Login />
              </UserSignedIn>
            }
          />
          <Route
            path="/signup"
            element={
              <UserSignedIn user={user}>
                <Signup />
              </UserSignedIn>
            }
          /> */}
          <Route path="/browse" element={<Browse />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
