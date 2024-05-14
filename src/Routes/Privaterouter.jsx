import { Navigate, useLocation } from "react-router-dom";
import Authfun from "../provider/Authfun";
import Loading from "../component/Loading";

function Privaterouter({ children }) {
  const { user, loading } = Authfun();
  const location = useLocation();

  if (loading) return <Loading></Loading>
  if (user) return children;
  return (
    <Navigate to="/login" state={location.pathname} replace={true}></Navigate>
  );
}

export default Privaterouter;
