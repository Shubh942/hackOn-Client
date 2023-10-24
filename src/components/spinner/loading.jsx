import "./styles/loading.scss";

export default function loading({ user }) {
  return (
    <div className="spinnerContainer">
      <div className="lockBody"></div>
      <img
        className="profileImg"
        // src={`/images/users/${user?.photoURL}.png`}
        src="../../../public/images/users/10"
        alt={`${user.displayName} avatar`}
      />
    </div>
  );
}
