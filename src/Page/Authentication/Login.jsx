import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Authfun from "../../provider/Authfun";
import axios from "axios";

function Login() {
  const { signInWithGoogle, signIn, signInWithGithub } = Authfun();
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(signInWithGoogle)
  async function handelForm(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
     const result =  await signIn(email, password);
      toast.success("Successfully Login!");
      navigate(location?.state || "/");
      const { data } = await axios.post(
        "https://assignment-project-kappa.vercel.app/jwt",
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function handelGoogleLogin() {
    try {
      const result = await signInWithGoogle();

      toast.success("Successfully Login!");
      navigate(location?.state || "/");

      // jwt
      const { data } = await axios.post(
        "https://assignment-project-kappa.vercel.app/jwt",
        {
          email: result?.user?.email,
        },
        { withCredentials: true }
      );
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  // async function handelGithub() {
  //   try {
  //     await signInWithGithub();
  //     toast.success("Successfully Login!");
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  const handelGithub = () => {
    signInWithGithub()
      .then(  (res) => {
        console.log(res);
        // jwt
   
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className=" my-10 rounded-lg  flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500 border-2 rounded-3xl shadow-2xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 bg-indigo-500 ">
              {/* SVG content goes here */}
              <img
                className="w-full h-full object-cover "
                src="https://cdn.dribbble.com/users/1172503/screenshots/4505740/media/d45f2014e49844aec6c56e5a7267948e.gif"
                alt=""
              />
            </div>

            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">Login</h1>
                <p>Enter your register info</p>
              </div>

              <div>
                <div className="mb-3">
                  <button
                    onClick={() => handelGoogleLogin()}
                    className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md"
                  >
                    <img
                      className="w-5 mr-2"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                      alt="Google logo"
                    />
                    Sign in with Google
                  </button>
                  <button
                    onClick={() => handelGithub()}
                    className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md mt-2"
                  >
                    <img
                      className="w-5 mr-2"
                      src="https://i.ibb.co/M14nZ1p/github.png"
                      alt="Google logo"
                    />
                    Sign in with GitHub
                  </button>
                </div>
              </div>

              <form onSubmit={handelForm}>
                <div className="flex -mx-3">
                  <div className="w-full  px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Email
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="email"
                        name="email"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-12">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Password
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-lock-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="password"
                        name="password"
                        className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="************"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full px-3 mb-5">
                    <button
                      type="submit"
                      className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-3 font-semibold"
                    >
                      LOGIN
                    </button>
                  </div>
                </div>
              </form>

              <p className="text-center font-semibold">
                Don't have an account{" "}
                <Link className="text-blue-600 underline" to="/register">
                  Register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
