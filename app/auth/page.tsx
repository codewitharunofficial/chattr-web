"use client";
import { login, signup } from "@/api_calls/auth";
import { User } from "@/types/User";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function AuthScreen() {
  const [mode, setMode] = useState("login");
  const [user, setUser] = useState<User |null>(null);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<number>(0);
  const [password, setPassword] = useState("");
  const router = useRouter();


  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen bg-gray-100">


      {/* LEFT HALF */}
      <div className="hidden md:flex flex-col items-center justify-center bg-blue-600 text-white p-10">
        <Image className="w-20 h-20 bg-blue-600 rounded-xl" src={'/Icon.webp'} alt="App Icon" width={80} height={80} />

        <h1 className="text-3xl font-bold">Chatrr</h1>
        <p className="text-sm mt-2 opacity-80">Fast • Secure • Real‑time Messaging</p>
        <p className="text-xs mt-10 opacity-70">© 2025 Chatrr. All rights reserved.</p>
      </div>

      {/* RIGHT HALF - AUTH BOX */}
      <div className="flex items-center justify-center p-6">
        <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {mode === "login" ? "Welcome Back" : "Create an Account"}
          </h2>


          <form className="space-y-4">


            {/* Phone */}
            <div>
              <label className="text-sm text-gray-600">Phone Number</label>
              <input type="text" className="w-full p-3 border rounded-xl bg-gray-50 outline-none" placeholder="Enter phone number" onChange={(e) => setPhone(parseInt(e.target.value))} />
            </div>
            {
              mode === "signup" && (
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input type="email" className="w-full p-3 border rounded-xl bg-gray-50 outline-none" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                </div>
              )
            }

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input type="password" className="w-full p-3 border rounded-xl bg-gray-50 outline-none" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <button
              type="button"
              className="w-full bg-blue-600 text-white p-3 rounded-xl mt-4 shadow hover:bg-blue-700 cursor-pointer"
              onClick={() => mode === "login" ? login(phone, password, setUser) : signup(phone, email, password, setUser)}
            >
              {mode === "login" ? "Log In" : "Sign Up"}
            </button>
          </form>


          {/* Switch Mode */}
          <p className="text-center text-gray-600 mt-4 cursor-pointer">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            <button
              className="text-blue-600 font-semibold ml-1 cursor-pointer"
              onClick={() => setMode(mode === "login" ? "signup" : "login")}
            >
              {mode === "login" ? "Sign Up" : "Log In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}