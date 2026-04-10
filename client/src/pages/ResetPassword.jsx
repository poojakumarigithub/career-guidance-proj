import { Link } from "react-router-dom";
import home from "../assets/images/home.jpg"; // same image as login

export default function ResetPassword() {
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

        {/* Reset Password Card */}
        <div className="relative z-10 bg-white/90 p-8 rounded-xl shadow-lg w-full max-w-md backdrop-blur-md">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
            Reset Password
          </h2>

          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email here.."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Reset Link
            </button>

            <p className="text-sm text-center mt-4">
              Back to{" "}
              <Link to="/login" className="text-indigo-600 hover:underline">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}