import { BiSolidEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import Authfun from "../provider/Authfun";


// import axios from "axios";
function Feturescard({ data, getalldata }) {
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
                <div>
      <div className=" bg-white border shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img
            className="rounded-t-lg w-full min-h-[250px] max-h-[250px]"
            src={thumbnail}
            alt=""
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-normal tracking-tight text-gray-900 dark:text-white">
              {`${title.slice(0,20)}.......`}
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
        </div>
      </div>
    </div>
        </div>
    );
}

export default Feturescard;