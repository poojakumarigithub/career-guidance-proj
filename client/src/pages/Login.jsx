import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-50 to-purple-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Login</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" placeholder="enter your email" name="email" 
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input type="password" placeholder="enter password" name="password" 
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"/>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">Login</button>
            <div className="flex justify-between text-sm mt-2">
              <Link to="/reset" className="text-indigo-600 hover:underline">Forgot Password?</Link>
              <Link to="/register" className="text-indigo-600 hover:underline">Register</Link>
            </div>
          </form>
        </div>
      </div>
      
    </>
  );
}
