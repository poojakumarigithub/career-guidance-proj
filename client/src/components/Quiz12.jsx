import React, { useEffect, useState } from "react";
import DarkToggle from "./DarkToggle";

export default function Quiz12() {
  const [features, setFeatures] = useState([]);
  const [dark, setDark] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [started, setStarted] = useState(false);
  const [selected, setSelected] = useState([]);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    fetch("/quiz12Features.json")
      .then((res) => res.json())
      .then((data) => {
        setFeatures(data);
        setSelected(Array(data.length).fill(0));
      });
  }, []);

  const toggleCard = (idx) => {
    setSelected((prev) =>
      prev.map((v, i) => (i === idx ? (v ? 0 : 1) : v))
    );
  };

  const progress = selected.filter((v) => v === 1).length;
  const progressPct = features.length
    ? (progress / features.length) * 100
    : 0;

  const startQuiz = () => {
    if (!username.trim() || !email.trim()) {
      alert("Please enter both name and email!");
      return;
    }
    setStarted(true);
  };

  const submitQuiz = async (e) => {
    e.preventDefault();
    if (!selected.includes(1)) {
      alert("Please select at least one interest!");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, email, answers: selected }),
      });
      const data = await res.json();
      if (data.career) {
        const attempts =
          JSON.parse(localStorage.getItem("careerAttempts")) || [];
        attempts.push({
          username,
          email,
          career: data.career,
          date: new Date().toLocaleString(),
        });
        localStorage.setItem("careerAttempts", JSON.stringify(attempts));
        alert(
          `🎉 Congratulations, ${username}! Recommended career: ${data.career}`
        );
        setFinished(true);
      } else {
        alert("Server error: " + (data.error || "Try again"));
      }
    } catch {
      alert("Server error. Please try again.");
    }
  };

  return (
    <div className={dark ? "dark bg-gray-200" : ""}>
      <DarkToggle dark={dark} setDark={setDark} />
      <div className="relative min-h-screen flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-20 blur-sm -z-10" />

        {!started && !finished && (
          <div
            className="max-w-2xl w-full p-8 rounded-2xl shadow-2xl transition
                       bg-gradient-to-br from-[#50e5ac] to-[#1158b0]
                       hover:from-[#168bcf] hover:to-[#dc569e]"
          >
            <h1 className="text-3xl text-white font-semibold text-center mb-2">
              🚀 Discover Your Future Career
            </h1>
            <p className="text-white text-center mb-4">
              Choose your passions and we’ll guide your path!
            </p>
            <input
              className="w-full p-3 rounded-md mb-4 outline-none"
              placeholder="Enter Your Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              className="w-full p-3 rounded-md mb-4 outline-none"
              placeholder="Enter Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              onClick={startQuiz}
              className="w-full py-3 rounded-md text-lg font-semibold
                         bg-gradient-to-r from-gray-700 to-purple-700
                         hover:from-blue-200 hover:to-blue-800 hover:text-black text-white"
            >
              Start Quiz
            </button>
          </div>
        )}

        {started && !finished && (
          <div
            className="max-w-4xl w-full p-6 rounded-2xl shadow-2xl transition
                       bg-gradient-to-br from-[#50e5ac] to-[#1158b0]
                       hover:from-[#168bcf] hover:to-[#dc569e]"
          >
            <h2 className="text-center text-white text-xl font-bold mb-4">
              👋 Welcome <b>{username}</b>, select what you love!
            </h2>

            <div className="w-full bg-gray-300 rounded-full h-3 mb-6">
              <div
                className="bg-gray-900 h-3 rounded-full transition-all"
                style={{ width: `${progressPct}%` }}
              />
            </div>

            <form
              onSubmit={submitQuiz}
              className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-4"
            >
              {features.map((feat, i) => (
                <div
                  key={i}
                  onClick={() => toggleCard(i)}
                  className={`cursor-pointer p-3 text-center font-semibold border-2 rounded-lg
                     transition ${
                       selected[i]
                         ? "bg-blue-500 text-white border-white"
                         : "bg-white text-black border-pink-100 hover:bg-blue-100"
                     }`}
                >
                  {i + 1}. {feat}
                </div>
              ))}
              <button
                type="submit"
                className="col-span-full mt-6 py-3 rounded-md text-lg font-semibold
                           bg-gradient-to-r from-gray-700 to-purple-700
                           hover:from-blue-200 hover:to-blue-800 hover:text-black text-white"
              >
                Submit Answers
              </button>
            </form>
          </div>
        )}

        {finished && (
          <div
            className="max-w-xl w-full p-8 text-center rounded-2xl shadow-2xl
                       bg-gradient-to-br from-[#50e5ac] to-[#1158b0]
                       hover:from-[#168bcf] hover:to-[#dc569e]"
          >
            <h1 className="text-3xl text-white font-bold mb-2">
              🎉 You're All Set!
            </h1>
            <p className="text-white mb-6">
              Your recommended career has been saved. 🎓
            </p>
            <button
              onClick={() => (window.location.href = "/dashboard")}
              className="w-full py-3 rounded-md text-lg font-semibold
                         bg-gradient-to-r from-gray-700 to-purple-700
                         hover:from-blue-200 hover:to-blue-800 hover:text-black text-white"
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
