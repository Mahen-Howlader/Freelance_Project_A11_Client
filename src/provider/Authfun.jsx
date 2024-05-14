import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

function Authfun() {
  const all = useContext(AuthContext);
  return all;
}

export default Authfun;
