"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const page = () => {
  const router = useRouter();

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("login failed ", error.meassage);
      toast.error(error.meassage);
    }
  };
  return (
    <div>
      <div className=" items-end flex justify-end max-w-[1500px] pt-4">
        <button
          onClick={logout}
          className=" bg-blue-500 text-white p-2 rounded-md mt-2"
        >
          Log out
        </button>
      </div>
      <div className=" flex justify-center items-center ">
        <h1 className="font-bold text-3xl pt-8">Profile Page</h1>
      </div>
      <div className="item-center justify-center flex pt-14">
        <p>
          This is the profile page. You can only see this page if you are logged
          in.
        </p>
      </div>
    </div>
  );
};
export default page;
