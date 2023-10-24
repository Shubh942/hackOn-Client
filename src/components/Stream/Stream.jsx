import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import conf from "/images/misc/conf.jpg";
import "./Stream.scss";

import Loading from "../spinner/loading";
import { FirebaseContext } from "../../context/firebase";
import NavBar from "../browsePage/navBar/NavBar";
import SelectedProfile from "../profilePage/SelectedProfile";

const Stream = () => {
  const [profile, setProfile] = useState({ displayName: "Utkarsh" });
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { firebase } = useContext(FirebaseContext);
  // const user = firebase.auth().currentUser || {};
  const user = true || {};

  const [RoomCode, setRoomCode] = useState("");
  const navigate = useNavigate();

  const submitCode = (e) => {
    e.preventDefault();
    navigate(`/room/${RoomCode}`);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile?.displayName]);

  return profile?.displayName ? (
    <div className="streampage">
      {loading ? <Loading user={user} /> : <div className="releaseBody"></div>}
      <NavBar
        user={user}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />
      <div className="relative h-screen main-content">
        <div>
          {/* <img src={conf} className="object-cover w-full h-full" /> */}
        </div>
        <div className="absolute h-full w-full flex overflow-hidden bg-black/60"></div>
        <div>
          <div>
            <h1>Welcome to *Delta stream</h1>
            <p className="text-[26px] text-white  -mt-2">
              Stream video with your friends
            </p>
          </div>
          <form onSubmit={submitCode}>
            <div className="input-box">
              <label>Enter Room Code</label>
              <input
                type="text"
                required
                placeholder="Enter Room Code"
                value={RoomCode}
                onChange={(e) => setRoomCode(e.target.value)}
              />
            </div>
            <button type="submit" className="btn-cta-stream">
              Go
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <SelectedProfile user={user} setProfile={setProfile} />
  );
};

export default Stream;
