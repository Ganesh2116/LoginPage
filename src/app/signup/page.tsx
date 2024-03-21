"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const signUpPage = () => {
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loding, setLoding] = useState(false);

  const onSignup = async () => {
    try {
      setLoding(true);
      const response = await axios.post("/api/users/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error: any) {
      console.log("singup failed ", error.meassage);
      toast.error(error.meassage);
    } finally {
      setLoding(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl font-semibold mt-4 mb-4 text-center p-10">
        {loding ? "processing" : "Signup"}
      </h1>
      <label htmlFor="username" className=" text-2xl font-semibold ">
        username
      </label>
      <input
        type="text"
        id="username"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="text-black border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="email" className=" text-2xl font-semibold ">
        Email
      </label>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="text-black border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label htmlFor="password" className=" text-2xl font-semibold">
        password
      </label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="text-black border border-gray-300 rounded-md px-3 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSignup}
        className="bg-blue-500 text-white px-3 py-2 rounded-md mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed "
        disabled={buttonDisabled}
      >
        {buttonDisabled ? "No signup" : "Signup"}
      </button>
      <Link
        href="/login"
        className="text-blue-500 hover:underline mt-2 cursor-pointer p-2"
      >
        ClicK to login page
      </Link>
    </div>
  );
};
export default signUpPage;
