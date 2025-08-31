import { Link } from "react-router-dom";

export default function Register() {
  return (
    <>
      
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-50 to-indigo-100">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">Register</h2>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Username</label>
              <input type="text" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
            </div>
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input type="password" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-400"/>
            </div>
            <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">Register</button>
          </form>
          <p className="text-sm text-center mt-4">
            Already have an account? <Link to="/login" className="text-indigo-600 hover:underline">Login</Link>
          </p>
        </div>
      </div>
      
    </>
  );
}
