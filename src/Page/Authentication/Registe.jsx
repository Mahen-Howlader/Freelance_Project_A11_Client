import { Link, useNavigate } from "react-router-dom";
import Authfun from "../../provider/Authfun";
import toast from "react-hot-toast";

function Registe() {
  const {
    setUser,
    user,
    logOut,
    signInWithGoogle,
    createUser,
    signInWithGithub,
  } = Authfun();
  const navigate = useNavigate();
  async function handelGoogleLogin() {
    console.log("click");
    try {
      await signInWithGoogle();
      toast.success("Successfully login!");
    } catch (err) {
      console.log(err);
    }
  }
  async function handelGithub() {
    try {
      await signInWithGithub();
      toast.success("Successfully login!");
    } catch (err) {
      console.log(err);
    }
  }

  async function handelRegister(e) {
    e.preventDefault();
    const firstname = e.target.firstname.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    // const fullname = firstname + " " + lastName
    const fullName = firstname
      .concat(" ", lastName)
      .trim()
      .replace(/\s+/g, " ");
    console.log({ fullName, email, password });

    try {
      await createUser(email, password);
      await logOut();
      setUser({ ...user, dispalyName: fullName });
      toast.success("Successfully register!");
      navigate("/login")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <div className="my-5 rounded-md  flex items-center justify-center px-5 py-5">
        <div
          className="bg-gray-100 text-gray-500  border-2 rounded-3xl shadow-2xl w-full overflow-hidden"
          style={{ maxWidth: "1000px" }}
        >
          <div className="md:flex w-full">
            <div className="hidden md:block w-1/2 ">
              {/* SVG content goes here */}
              <img
                className="w-full h-full object-cover "
                src="https://cdn.dribbble.com/users/522566/screenshots/2809863/media/67b4c9bbd83784077daca61c6a1d97d3.gif"
                alt=""
              />
            </div>

            <div className="w-full md:w-1/2 py-10 px-5 md:px-10">
              <div className="text-center mb-10">
                <h1 className="font-bold text-3xl text-gray-900">REGISTER</h1>
                <p>Enter your information to register</p>
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

              <form onSubmit={handelRegister}>
                <div className="grid grid-cols-1 md:grid-cols-2 -mx-3">
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      First name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        name="firstname"
                        className="w-full -ml-10 px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Johan"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Last name
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-account-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        name="lastName"
                        className="w-full -ml-10 px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="Smith"
                      />
                    </div>
                  </div>
                </div>
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
                        className="w-full -ml-10 px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="johnsmith@example.com"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-3">
                  <div className="w-full  px-3 mb-5">
                    <label htmlFor="" className="text-xs font-semibold px-1">
                      Photo URL
                    </label>
                    <div className="flex">
                      <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center">
                        <i className="mdi mdi-email-outline text-gray-400 text-lg"></i>
                      </div>
                      <input
                        type="text"
                        name="photo"
                        className="w-full -ml-10 px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                        placeholder="png/jpag"
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
                        className="w-full -ml-10 px-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
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
                      REGISTER NOW
                    </button>
                  </div>
                </div>
              </form>
              <p className="text-center font-semibold">
                I have an account{" "}
                <Link to="/login" className="text-blue-600 underline">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registe;
