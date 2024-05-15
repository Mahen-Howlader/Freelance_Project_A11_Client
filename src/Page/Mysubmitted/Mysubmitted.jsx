import { useEffect, useState } from "react";
import Useaxiossecure from "../../Hooks/Useaxiossecure";
import Authfun from "../../provider/Authfun";

function Mysubmitted() {
  const { user } = Authfun();
  const [detailsData, setDetailsData] = useState([]);
  const axiosSecure = Useaxiossecure();
  const getDataFun = async () => {
    const { data } = await axiosSecure(`/mysubmitted/${user?.email}`);
    setDetailsData(data);
  };
  useEffect(() => {
    getDataFun();
  }, [user?.email]);
  // console.log(detailsData);

  return (
    <div className="my-10 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden  bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-full px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                  <svg
                    width="18"
                    height="18"
                    className="w-4 lg:w-auto"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9993 16.9993L13.1328 13.1328"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow flex-auto leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-xs lg:text-base text-gray-500 font-thin"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden py-5 bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Title
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Marks
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Obtained Marks
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Feedback
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {detailsData.map((data) => (
              <tr key={data._id}>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">
                    {data?.title}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  <span className="relative inline-block px-3 py-1 font-semibold text-orange-900 leading-tight">
                    <span
                      aria-hidden
                      // className={`px-3 py-1   text-xs  rounded-full`}
                      className={`absolute inset-0 ${
                        data.status.toLowerCase() === "completed" &&
                        "text-green-600 bg-emerald-200"
                      } ${
                        data.status.toLowerCase() === "pending" &&
                        "text-pink-500 bg-pink-300/60"
                      } opacity-50 rounded-full`}
                    ></span>
                    <span className="relative text-xs"> {data?.status}</span>
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                  {data?.marks}
                </td>

                <td
                  className={`px-6 py-4 border-b border-gray-500   text-green-700  text-sm leading-5 `}
                >
                  <span
                    className={`p-2 rounded-full ${
                      data.status === "pending" &&
                      "text-pink-500 bg-pink-300/60"
                    }`}
                  >
                    {data?.obtainedmarks}
                  </span>
                </td>
                <td className="px-6 max-w-40 overflow-hidden  max-h-5 py-4 whitespace-no-wrap overflow-auto  border-b border-gray-500 text-blue-900 text-sm leading-5">
                  <p className="content">{data?.textarea}</p>
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

export default Mysubmitted;
