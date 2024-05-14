import axios from "axios";
import { useEffect, useState } from "react";
import Assignmentcard from "./Assignmentcard";
import Loading from "../../component/Loading";
function Allassignment() {
  const [alldata, setAllData] = useState([]);
  const [filter, setFilter] = useState("");
  const [dataloading,setDataLoading] = useState(false)
  const getalldata = async () => {
    setDataLoading(true)
    const { data } = await axios(
      `https://assignment-project-kappa.vercel.app/allproject?filter=${filter}`
    );
    setAllData(data);
    console.log(data);
    setDataLoading(false)
  };

  useEffect(() => {
    getalldata();
  }, [filter]);

  if(dataloading) return <Loading></Loading>

  return (
    <div className="my-10">
      <div className="flex items-center gap-x-4 justify-end mb-5">
        <div className=" w-2/6">
          <select
            id="countries"
            onChange={(e) => setFilter(e.target.value)}
            value={filter}
            name="difficulty" // Add name attribute
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Choose Assignment Difficulty Level</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        <button className="btn bg-blue-700 font-semibold hover:bg-red-700 text-white">
          Reset
        </button>
      </div>
      {/* <div className=" bg-white border shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <img
              className="rounded-t-lg"
              src="https://themeforest.img.customer.envatousercontent.com/files/493202455/prev/images-01.jpeg?auto=compress%2Cformat&fit=crop&crop=top&w=590&h=300&s=238afcc6f27df055b4cc244bb7ba10d8"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <div className="flex justify-between my-5 prompt_regular ">
              <h3 className="text-xl">
                Marks : <span>50</span>
              </h3>
              <h3 className="text-xl">
                Level : <span>Medium</span>
              </h3>
            </div>

            <div className="flex justify-between">
              <Link
                href="#"
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                View Details
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
              <div className="flex text-3xl gap-x-5">
                <BiSolidEdit className="hover:text-green-600 cursor-pointer" />
                <MdDelete className="hover:text-red-600 cursor-pointer" />
              </div>
            </div>
          </div>
        </div> */}
      <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {alldata.map((data) => (
          <Assignmentcard
            key={data._id}
            getalldata={getalldata}
            data={data}
          ></Assignmentcard>
        ))}
      </div>
    </div>
  );
}

export default Allassignment;
