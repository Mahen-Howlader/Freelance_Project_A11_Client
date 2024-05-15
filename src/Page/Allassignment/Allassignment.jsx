import axios from "axios";
import { useEffect, useState } from "react";
import Assignmentcard from "./Assignmentcard";
import Loading from "../../component/Loading";
import { useLoaderData } from "react-router-dom";
function Allassignment() {
  const [alldata, setAllData] = useState([]);
  const [filter, setFilter] = useState("");
  const [ascdec, setAscDec] = useState("");
  const [dataloading, setDataLoading] = useState(false);
  const { count } = useLoaderData();
  const [searchText,setSearchText] = useState("")
  const [search, setSearch] = useState("");
  // const itemPerPage = 2;
  const [currentPage, setCurrentPage] = useState(0);
  const [itemPerPage, setItemPerPage] = useState(5);
  const numberOfPage = Math.ceil(count / itemPerPage);
  // console.log(ascdec)
  console.log(alldata);
  const pages = [...Array(numberOfPage).keys()];

  const getalldata = async () => {
    setDataLoading(true);
    const { data } = await axios(
      `http://localhost:3000/allproject?page=${currentPage}&size=${itemPerPage}&filter=${filter}&sort=${ascdec}&search=${search}`
    );
    setAllData(data);
    setDataLoading(false);
  };

  function handelPrevious() {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  }

  function handelNext() {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  }
  useEffect(() => {
    getalldata();
  }, [currentPage, filter, itemPerPage, ascdec, search]);

  if (dataloading) return <Loading></Loading>;

  function handelchoosenum(e) {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(0);
  }

  function handelreset() {
    setAscDec("");
    setFilter("");
    setSearch("");
    setSearchText("");
  }

  function handelSearch(e) {
    e.preventDefault();
    setSearch(searchText);
  }

  return (
    <div className="my-10">
      <div className="flex items-center gap-x-4 justify-end mb-5">
        {/* search  */}
        <form
          onSubmit={handelSearch}
          className="relative w-full max-w-xl mx-auto bg-white rounded-full"
        >
          <input
            placeholder="e.g. Blog"
            className="rounded-full w-full h-16 bg-transparent py-2 pl-8 pr-32 outline-none border-2 border-gray-100 shadow-md focus:ring-teal-200 focus:border-teal-200"
            type="text"
            name="search"
            id="search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inline-flex items-center h-10 px-4 py-2 text-sm text-white transition duration-150 ease-in-out rounded-full outline-none right-3 top-3 bg-teal-600 sm:px-6 sm:text-base sm:font-medium hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            <svg
              className="-ml-0.5 sm:-ml-1 mr-2 w-4 h-4 sm:h-5 sm:w-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            Search
          </button>
        </form>
        <div className=" w-2/6">
          <select
            id="ascdec"
            onChange={(e) => setAscDec(e.target.value)}
            value={ascdec}
            name="ascdec" // Add name attribute
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="">Sort By Number</option>
            <option value="dec">Decscending order</option>
            <option value="asc">Ascending order</option>
          </select>
        </div>
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
        <button
          onClick={handelreset}
          className="btn bg-blue-700 font-semibold hover:bg-red-700 text-white"
        >
          Reset
        </button>
      </div>
      <div className="grid gap-10  grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {alldata.map((data) => (
          <Assignmentcard
            key={data._id}
            getalldata={getalldata}
            data={data}
          ></Assignmentcard>
        ))}
      </div>
      <div>
        <div className="flex items-center mt-5 justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div className="flex flex-1  justify-between sm:hidden">
            <button
              disabled={currentPage === 0}
              onClick={handelPrevious}
              className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Previous
            </button>
            <button
              onClick={handelNext}
              disabled={currentPage === numberOfPage - 1}
              className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Next
            </button>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className="">
              <p className="flex gap-x-1 text-sm text-gray-700">
                Showing
                <span className="font-medium">1</span>
                to
                <span className="font-medium">10</span>
                of
                <span className="font-medium">97</span>
                results
              </p>
            </div>
            <div>
              <nav
                className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                aria-label="Pagination"
              >
                <button
                  disabled={currentPage === 0}
                  onClick={handelPrevious}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {pages.map((val, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => setCurrentPage(val)}
                      className={`relative z-10 inline-flex items-center ${
                        currentPage === val
                          ? "bg-indigo-600 text-white"
                          : "text-black border bg-slate-300"
                      }  px-4 py-2 text-sm font-semibold  focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 `}
                    >
                      {index + 1}
                    </button>
                  );
                })}

                <button
                  onClick={handelNext}
                  disabled={currentPage === numberOfPage - 1}
                  className="relative  inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                <div className="w-2/6">
                  <select
                    id="countries"
                    onChange={handelchoosenum}
                    value={itemPerPage}
                    name="difficulty" // Add name attribute
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">Choose</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="30">20</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Allassignment;
