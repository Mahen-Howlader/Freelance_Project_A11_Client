import axios from "axios";
import Authfun from "../provider/Authfun";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

function Useaxiossecure() {
  const { logOut } = Authfun();
  const navigate = useNavigate();
  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      console.log(`error from axios interceptor ${error.response}`);
      if (error.response.status === 401 || error.response.status === 401) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
}

export default Useaxiossecure;
