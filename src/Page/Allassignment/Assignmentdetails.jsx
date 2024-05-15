import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import Authfun from "../../provider/Authfun";

function Assignmentdetails() {
  const { id } = useParams();
  const { user } = Authfun();
  const navigate = useNavigate()
  const [detailsData, setDetailsData] = useState({});
  const getDataFun = async () => {
    const { data } = await axios(
      `https://assignment-project-kappa.vercel.app/assignmentdetails/${id}`
    );
    setDetailsData(data);
  };

  useEffect(() => {
    getDataFun();
  }, [id]);

  const { title, thumbnail, marks, level,dateline, description, bayer } =
    detailsData || {};
  // title, assignment status, assignment marks, your
  // obtained marks,
  async function handelsubmitform(e) {
    e.preventDefault();
    const form = e.target;
    if (user?.email === bayer?.bayerEmail) {
      document.getElementById("my_modal_3").close()
      return toast.error("Your assignment permision not allow");
    }
    const link = e.target.link.value;
    const name = e.target.name.value;
    const textarea = e.target.textarea.value;
    const status = "pending";
    const email = user?.email;
    const obtainedmarks = "procesing";
     const submitInfo = { link, textarea, email,name, title, marks, status, bayer,obtainedmarks };

    try {
      const { data } = await axios.post(
        "https://assignment-project-kappa.vercel.app/bidassignment",
        submitInfo
      );
      console.log(data);
      if (data.acknowledged) {
        toast.success("Submit success");
        
        form.reset();
        navigate("/mysubmitted");
      }
    } catch (err) {
      console.log(err);
    }
  }
console.log(detailsData)
  return (
    <div>
      <div className="dark:bg-gray-100 shadow-2xl rounded-lg my-10 dark:text-gray-800">
        <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm dark:bg-gray-50">
          <div className="">
            <span className="text-sm dark:text-gray-600">{new Date(dateline).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm dark:text-gray-600">Level : {level}</span>
            <span className="text-sm dark:text-gray-600 text-xl font-semibold">
              Marks : {marks}
            </span>
          </div>
          <div className="w-full ">
            <img
              className="w-full md:h-[300px] lg:h-[400px]  rounded-md"
              src={thumbnail}
              alt=""
            />
          </div>
          <div className="mt-3">
            <a
              rel="noopener noreferrer"
              href="#"
              className="text-2xl font-bold hover:underline"
            >
              {title}
            </a>
            <p className="mt-2">{description}</p>
          </div>
          <div className="mt-5">
            <button
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Take assignment
            </button>
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                    ✕
                  </button>
                </form>
                <form onSubmit={handelsubmitform} className="max-w-sm mx-auto">
                  <div className="mb-5">
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="link"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your assignment pdf/docs link
                    </label>
                    <input
                      type="text"
                      id="link"
                      name="link"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="pdf/live link"
                      required
                    />
                  </div>
                  <div className="mb-5">
                    <label
                      htmlFor="link"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Assignment details
                    </label>
                    <textarea
                      id="textarea"
                      name="textarea"
                      className="bg-gray-50 max-h-72 min-h-36 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-24 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignmentdetails;
