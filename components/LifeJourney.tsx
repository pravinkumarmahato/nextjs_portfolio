"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  { id: 1, name: "School Hut", icon: "🏫", x: 200, details: ["10th Grade", "Top 5%", "Science Club Lead"] },
  { id: 2, name: "College Temple", icon: "🎓", x: 600, details: ["B.Tech in CSE", "Hackathon Winner", "CGPA 8.5"] },
  { id: 3, name: "First Job Camp", icon: "🏕️", x: 1000, details: ["Software Engineer", "Built Internal Tools", "Improved performance 30%"] },
  { id: 4, name: "Company Tower", icon: "🏢", x: 1400, details: ["Full Stack Engineer", "Lead Projects", "Mentored Juniors"] },
];

export default function LifeJourney() {
  const [position, setPosition] = useState(0); // character x position
  const [activeMilestone, setActiveMilestone] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  // handle arrow key movement + Enter for popup
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setPosition((p) => Math.min(p + 20, 1500));
      if (e.key === "ArrowLeft") setPosition((p) => Math.max(p - 20, 0));
      if (e.key === "Enter" && activeMilestone) setShowModal(true);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [activeMilestone]);

  // check if character is near a milestone
  useEffect(() => {
    const found = milestones.find((m) => Math.abs(m.x - position) < 50);
    setActiveMilestone(found || null);
  }, [position]);

  return (
      // {/* // <main className="w-screen h-screen relative"> */}
      <div className="flex items-center w-full h-full bg-cover bg-center">
      {/* Background layers for parallax */}
      <div className="absolute inset-0 bg-[url('/mountain-trees.png')] bg-repeat-x bg-bottom" style={{ backgroundSize: "cover" }} />
      <div className="absolute inset-0 bg-[url('/trees.png')] bg-repeat-x bg-bottom opacity-80" style={{ backgroundSize: "contain" }} />

      {/* Ground */}
      <div className="absolute bottom-0 w-[2000px] h-[305px] bg-[url('/grass_1.png')]"></div>

      {/* Milestones (huts, temples, towers) */}
      {milestones.map((m) => (
        <motion.div
          key={m.id}
          className="absolute bottom-24 text-4xl"
          style={{ left: m.x }}
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          {m.icon}
          <p className="text-sm text-center">{m.name}</p>
        </motion.div>
      ))}

      {/* Character */}
      <motion.div
        className="absolute bottom-20 text-5xl"
        animate={{ x: position }}
        transition={{ type: "spring", stiffness: 120 }}
      >
        🧑‍🚀
      </motion.div>

      {/* Popup hint when near milestone */}
      {activeMilestone && (
        <div className="absolute bottom-40 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded shadow-lg text-sm">
          Press <b>Enter</b> to explore {activeMilestone.name}
        </div>
      )}

      {/* Modal for milestone details */}
      {showModal && activeMilestone && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white p-6 rounded-xl shadow-xl w-96"
          >
            <h2 className="text-xl font-bold mb-4">{activeMilestone.name}</h2>
            <ul className="list-disc ml-5 space-y-2">
              {activeMilestone.details.map((d: string, i: number) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => setShowModal(false)}
            >
              Back to Journey
            </button>
          </motion.div>
        </div>
      )}
    </div>
  );
}
