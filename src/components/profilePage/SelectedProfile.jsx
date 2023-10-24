/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { useMatchMedia } from "../../helpers/useMatchMedia";

import "./styles/index.scss";

export default function SelectedProfile({ user, setProfile }) {
  const isTabletDesktopResolution = useMatchMedia("(min-width:601px), true");
  return (
    <>
      <div className="headerNav">
        <Link className="amazonlogo" to={ROUTES.HOME}>
          {isTabletDesktopResolution ? (
            <img
              className="navLogo"
              src="/images/misc/deltalogo.png"
              alt="Delta logo"
            />
          ) : (
            <img
              className="navMobileLogo"
              src="/images/misc/deltaD.png"
              alt="Delta Mobile logo"
            />
          )}
        </Link>
        {/* manage with pencil */}
      </div>
      <div className="profileContainer">
        <h1>{"Who's Watching?"}</h1>
        <ul>
          <li>
            <img
              onClick={() =>
                setProfile({
                  displayName: user.displayName,
                  photoURL: user.photoURL,
                })
              }
              data-testid="user-profile"
              src={
                user?.photoURL
                  ? `/images/users/${user?.photoURL}.png`
                  : "/images/misc/loading.gif"
              }
              alt="teal delta avatar icon"
            />
            <p>{user.displayName}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
