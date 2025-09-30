"use client";
import { signIn , useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";

export default function  LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const {data: session} = useSession()

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError(""); // clear previous error

  const res = await signIn("credentials", {
    redirect: false,
    email,
    password,
  });

  if (!res) {
    setError("Something went wrong");
    return;
  }

  if (res.error) {
    setError("Invalid credentials"); // do NOT redirect
    return;
  }

  // Successful login
  if (res.ok) {
    window.location.href = "/"; // redirect only if ok
  }
};


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
        
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border px-4 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Login
          </button>
          <div>Welcome {session?.user?.name}, Role: {session?.user?.role}</div>
        </form>

    <button
  onClick={() =>
    signIn("google", { callbackUrl: "/" }) // redirect to home on success
  }
  className="w-full mt-4 border py-2 rounded hover:bg-gray-100 transition"
>
  Sign in with Google
</button>


        <p className="mt-4 text-center">
          Dont have an account?{" "}
          <Link href="/auth/register" className="text-blue-600">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
