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
      Profile page
      <button
        onClick={logout}
        className=" bg-blue-500 text-white p-2 rounded-md mt-2 "
      >
        Log out
      </button>
    </div>
  );
};
export default page;
