import { FaUser, FaCheckCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckIconsNToast = () => {
  // toast.success("Success!");
  // toast.error("Error!");
  // toast.info("Info message");
  // toast.warn("Warning!");

  const notify = () => {
    toast.success(" Logged in successfully!");
  };

  return (
    <div>
      <h2>
        Welcome <FaUser />
      </h2>
      <p>
        Status: Active <FaCheckCircle color="green" />
      </p>
      <div>
        <button onClick={notify}>Show Toast</button>

        {/*  Required container */}
      </div>
    </div>
  );
};

export default CheckIconsNToast;
