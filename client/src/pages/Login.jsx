import { Link } from "react-router-dom";
import home from "../assets/images/home.jpg";   // <-- add your image path here
  // <-- background image

export default function Login() {
  return (
    <>
      {/* Background wrapper */}
      <div className="relative min-h-screen flex justify-center items-center">

        {/* Blurred background image */}
        <img
          src={home}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-90 z-0"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0"></div>

        {/* Login Card */}
        <div className="relative z-10 bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
            Login
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="enter your email"
                name="email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="enter password"
                name="password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Login
            </button>

            <div className="flex justify-between text-sm mt-2">
              <Link to="/reset" className="text-indigo-600 hover:underline">
                Forgot Password?
              </Link>
              <Link to="/register" className="text-indigo-600 hover:underline">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
