import axios from "axios";
import { useEffect, useState } from "react";
import Authfun from "../../provider/Authfun";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Pendingassignments() {
  
  const { user } = Authfun();
  const navigate = useNavigate()
  const [detailsData, setDetailsData] = useState([]);
  const [markassignment, setMarkAssignment] = useState({});
  const getDataFun = async () => {
    const { data } = await axios(
      `https://assignment-project-kappa.vercel.app/pendingsubmitted/${user?.email}`
    );
    setDetailsData(data);
  };

  useEffect(() => {
    getDataFun();
  }, [user?.email]);
  // const { title, thumbnail, marks, level, description, bayer } =
  //   detailsData || {};
  async function sendmark(id) {
    const { data } = await axios(`https://assignment-project-kappa.vercel.app/markassignment/${id}`);
    console.log(data, id);
    setMarkAssignment(data);
  }

  const handelStatus = async (e, id) => {
    e.preventDefault();
    const marknum = e.target.marknum.value;
    const textarea = e.target.textarea.value;
    const marksResult = parseFloat(marknum);

    if(markassignment.marks > marknum){
      return toast.error(`subject max number ${markassignment.marks}`)
    }
    const updateAssignment = {
      status: "completed",
      obtainedmarks: marksResult,
      textarea,
    };

    try {
      const { data } = await axios.patch(
        `https://assignment-project-kappa.vercel.app/assignmentresult/${id}`,
        updateAssignment
      );
      console.log(data);
      if(data.modifiedCount){
        toast.success("Success result submit")
        // navigate("/mysubmitted")
        document.getElementById("my_modal_3").close();
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="my-10 my-10 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <div className="flex justify-center">
          <span className="text-3xl text-center mb-7 border-b-black  font-semibold uppercase border-b-2 pb-1">
            Pending assignments
          </span>
        </div>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Marks
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Examinee
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Give mark
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {detailsData?.map((data) => (
              <tr key={data._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">
                    {data?.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {data?.marks}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {data?.name}
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <div>
                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <div className="mt-5">
                      <button
                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                          document.getElementById("my_modal_3").showModal();
                          sendmark(data?._id);
                        }}
                      >
                        {`${data?.status === "pending" ? "Mark" : "Replace"}`}
                      </button>
                      <dialog id="my_modal_3" className="modal">
                        <div className="modal-box">
                          <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                              ✕
                            </button>
                          </form>
                          <form
                            onSubmit={(e) =>
                              handelStatus(e, markassignment?._id)
                            }
                            className="max-w-sm mx-auto"
                          >
                            <div className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                              <div className="h-full overflow-hidden">
                                <p>
                                  Assignment Link ={" "}
                                  <a
                                  className="text-blue-800"
                                    href={markassignment.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {markassignment.link}
                                  </a>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="my-5">
                              <label
                                htmlFor="link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Give assignment mark || Subject Mark <span className="text-green-600">{markassignment.marks}</span>
                              </label>
                              <input
                                type="number"
                                id="link"
                                name="marknum"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                placeholder="assignment mark"
                                required
                              />
                            </div>
                            <div className="mb-5">
                              <label
                                htmlFor="link"
                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                              >
                                Send Feedback
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
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot></tfoot>
        </table>
    
      </div>
    </div>
  );
}

export default Pendingassignments;
