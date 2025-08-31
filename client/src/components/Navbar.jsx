import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-between items-center px-6 py-4 shadow-md bg-white">
      <div className="text-2xl font-bold text-indigo-600">Career.</div>
      <ul className="flex gap-6">
        <li>
          <Link to="/" className="hover:text-indigo-500">Home</Link>
        </li>
        <li>
          <Link to="/about" className="hover:text-indigo-500">About</Link>
        </li>
        <li className="relative group">
          <span className="cursor-pointer hover:text-indigo-500">
            Services ▾
          </span>
          <ul className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 p-2">
            <li><Link to="/stroies" className="block px-4 py-2 hover:bg-indigo-100">Stories</Link></li>
            <li><Link to="/mentor" className="block px-4 py-2 hover:bg-indigo-100">Mentor</Link></li>
            <li><Link to="/courses" className="block px-4 py-2 hover:bg-indigo-100">Courses</Link></li>
          </ul>
        </li>
        <li>
          <Link to="/register" className="hover:text-indigo-500">Register</Link>
        </li>
        <li>
          <Link to="/contactus" className="hover:text-indigo-500">Contact</Link>
        </li>
      </ul>
    </div>
  );
}
