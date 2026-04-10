import { Link } from "react-router-dom";
import home from "../assets/images/home.jpg";   // <-- add your image path here

export default function Register() {
  return (
    <>
      {/* Background Image */}
      <div className="relative min-h-screen flex justify-center items-center">

        {/* Blurred background image */}
        <img
          src={home}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover filter blur-sm brightness-90 z-0"
        />

        {/* Transparent overlay for a soft dim effect */}
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm z-0"></div>

        {/* Register Card */}
        <div className="relative z-10 bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
            Register
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1">Username</label>
              <input
                type="text"
                placeholder="Username"
                name="username"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                placeholder="Enter your email here..."
                name="email"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your psw..."
                name="password"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center mt-4">
            Already have an account?{" "}
            <Link to="/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
