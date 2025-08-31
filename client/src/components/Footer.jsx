import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <section className="bg-gray-100 py-10" id="QuickLinks">
        <div className="container mx-auto flex flex-wrap justify-between px-6">
          <h2 className="text-2xl font-bold text-indigo-600">Career.</h2>
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <Link to="/resources" className="block hover:text-indigo-500">Resources</Link>
            <Link to="/courses" className="block hover:text-indigo-500">Courses</Link>
            <Link to="/stories" className="block hover:text-indigo-500">Stories</Link>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Others</h3>
            <Link to="/" className="block hover:text-indigo-500">Home</Link>
            <Link to="/faq" className="block hover:text-indigo-500">FAQ's</Link>
            <Link to="/contactus" className="block hover:text-indigo-500">Feedback</Link>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <Link to="/" className="block hover:text-indigo-500">+49 082 564 8889</Link>
            <Link to="/" className="block hover:text-indigo-500">yourmail@gmail.com</Link>
            <div className="flex gap-4 mt-2">
              <Link to="#"><i className="bx bxl-facebook text-xl"></i></Link>
              <Link to="#"><i className="bx bxl-twitter text-xl"></i></Link>
              <Link to="#"><i className="bx bxl-instagram text-xl"></i></Link>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-gray-200 text-center py-4">
        <h3>© All Rights Reserved</h3>
      </div>
    </>
  );
}
