import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Authfun from "../../provider/Authfun";
import Swal from "sweetalert2";
import axios from "axios";

function Assignmentcard({ data, getalldata }) {
  const { _id, description, level, marks, thumbnail, title, bayer } =
    data || {};
  const { user } = Authfun();
  async function handeldelete(id) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const { data } = await axios.delete(
            `https://assignment-project-kappa.vercel.app/allproject/${id}`
          );
          //   console.log(data);
          if (data.deletedCount) {
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
            getalldata();
          }
        } catch (err) {
          console.log(err);
        }
      }
    });
  }

  return (
    <div>
      <div className=" bg-white border shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full h-full object-cover"
            src={thumbnail}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <div className="flex justify-between my-5 prompt_regular ">
            <h3 className="text-xl">
              Marks : <span>{marks}</span>
            </h3>
            <h3 className="text-xl">
              Level : <span>{level}</span>
            </h3>
          </div>
          <div className="flex justify-between">
            <Link
              to={`/assignmentdetails/${_id}`}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View Details
            </Link>
            {user?.email == bayer?.bayerEmail && (
              <div className="flex text-3xl gap-x-5">
                <Link to={`/updatepage/${_id}`}> 
                <BiSolidEdit className="hover:text-green-600 cursor-pointer" />
                </Link>
                <MdDelete
                  onClick={() => handeldelete(_id)}
                  className="hover:text-red-600 cursor-pointer"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Assignmentcard;
