"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import axios from "axios";

const LoginPage = () => {
  const router = useRouter();

  const [displayButton, setDisplayButton] = useState(false);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({ email: "", password: "" });

  const Login = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/login", user);
      console.log("Login success", response.data);
      toast.success("Login success");
      router.push("/profile/[id]");
    } catch (error: any) {
      console.log("login failed ", error.meassage);
      toast.error(error.meassage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisplayButton(false);
    } else {
      setDisplayButton(true);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1>{loading ? "processing" : "Login"}</h1>
      <label htmlFor="email">email</label>
      <input
        type="email"
        id="email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        className="text-black"
      />
      <label htmlFor="password">password</label>
      <input
        type="password"
        id="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        className="text-black"
      />
      <button onClick={Login}>{displayButton ? "NO login" : "Login"}</button>
      <Link href="/signup">Click to Sigmup page</Link>
    </div>
  );
};
export default LoginPage;
