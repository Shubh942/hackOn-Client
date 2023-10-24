/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

export default function UserSignedIn({ user, children }) {
  if (user) {
    return <Navigate to="'/browse'" replace />;
  }

  return children;
}
