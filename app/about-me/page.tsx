// import { Trophy, Award } from "lucide-react"
// import Image from "next/image"

// // Card Component
// function Card({ children, className }: { children: React.ReactNode; className?: string }) {
//   return <div className={`rounded-xl bg-[#1a1033] shadow-lg ${className}`}>{children}</div>
// }

// // CardContent Component
// function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
//   return <div className={`p-6 ${className}`}>{children}</div>
// }

// // Button Component
// function Button({
//   children,
//   className,
//   ...props
// }: React.ButtonHTMLAttributes<HTMLButtonElement> & { className?: string }) {
//   return (
//     <button
//       className={`px-4 py-2 rounded-xl border border-purple-400 text-purple-300 hover:bg-purple-500/20 transition ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   )
// }

// const page = () => {
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-[#0a001a] to-[#120029] text-white p-8">
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//         {/* Left Section */}
//         <Card>
//           <CardContent>
//             <h1 className="text-3xl font-bold text-blue-400 mb-6">
//               Journey of a 3D Artist
//             </h1>

//             {/* Avatar */}
//             <div className="flex justify-center mb-6">
//               <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-purple-500 shadow-lg">
//                 <Image
//                   src="/avatar.png" // put avatar image in public folder
//                   alt="3D Artist Avatar"
//                   width={160}
//                   height={160}
//                   className="object-cover"
//                 />
//               </div>
//             </div>

//             {/* About Me */}
//             <h2 className="text-xl font-semibold text-blue-300 mb-3">About Me</h2>
//             <p className="text-sm leading-relaxed text-gray-300 mb-6">
//               Welcome! I’m a passionate 3D artist specializing in digital
//               storytelling and design. My work blends technical skill with
//               creativity to craft immersive visual experiences that inspire
//               imagination.
//             </p>

//             {/* Skills */}
//             <div className="grid grid-cols-3 gap-4 text-center text-sm text-gray-300">
//               <div className="flex flex-col items-center">
//                 <Image src="/icons/zbrush.png" alt="ZBrush" width={40} height={40} />
//                 ZBrush
//               </div>
//               <div className="flex flex-col items-center">
//                 <Image src="/icons/maya.png" alt="Maya" width={40} height={40} />
//                 Maya
//               </div>
//               <div className="flex flex-col items-center">
//                 <Image src="/icons/substance.png" alt="Substance" width={40} height={40} />
//                 Substance
//               </div>
//               <div className="flex flex-col items-center">
//                 <Image src="/icons/painter.png" alt="Painter" width={40} height={40} />
//                 Painter
//               </div>
//               <div className="flex flex-col items-center">
//                 <Image src="/icons/unreal.png" alt="Unreal Engine" width={40} height={40} />
//                 Unreal Engine
//               </div>
//               <div className="flex flex-col items-center">
//                 <Image src="/icons/marvelous.png" alt="Marvelous Designer" width={40} height={40} />
//                 Marvelous Designer
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Right Section */}
//         <Card>
//           <CardContent>
//             <h2 className="text-3xl font-bold text-pink-400 mb-6">
//               Milestones & Triumphs
//             </h2>

//             <div className="grid grid-cols-1 gap-6">
//               <div className="p-4 rounded-xl bg-[#24124d] flex items-center gap-4">
//                 <Trophy className="text-yellow-400" />
//                 <span>Secured <b>All India Rank 80</b> in the <b>VITMEE Entrance Examination</b>.</span>
//               </div>

//               <div className="p-4 rounded-xl bg-[#24124d] flex items-center gap-4">
//                 <Award className="text-pink-400" />
//                 <span>Achieved <b>1st Place</b> in the <b>Internal Hackathon</b> organized by the MCA Department, VIT Vellore.</span>
//               </div>

//               <div className="p-4 rounded-xl bg-[#24124d] flex items-center gap-4">
//                 <Award className="text-blue-400" />
//                 <span>Won <b>2nd Place</b> at the <b>Internal Hackathon of KC College</b>.</span>
//               </div>

//               <div className="p-4 rounded-xl bg-[#24124d] flex items-center gap-4">
//                 <Trophy className="text-green-400" />
//                 <span>Awarded <b>2nd Runner-Up</b> in <b>Mastek’s Deep Blue Season 7</b> among <b>282 registered teams</b>.</span>
//               </div>

//               <div className="p-4 rounded-xl bg-[#24124d] flex items-center gap-4">
//                 <Award className="text-purple-400" />
//                 <span>Successfully <b>participated in HackSRM 3.0</b>, a national-level virtual hackathon conducted by SRM University AP and NextTechLab AP.</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default page

"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Grid } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import {
  FaPaintBrush,
  FaCubes,
  FaUnity,
  FaTshirt,
  FaFilm,
} from "react-icons/fa";
import { SiAutodesk, SiBlender, SiUnrealengine } from "react-icons/si";


export default function PortfolioPage() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-950 via-indigo-900 to-indigo-950 text-indigo-100 overflow-hidden">
      {/* Floating background shapes */}
      <div className="absolute top-10 left-5 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-52 h-52 bg-pink-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 left-1/4 w-28 h-28 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />

      <main className="relative z-10 max-w-6xl mx-auto px-4 py-20 mt-20">
        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Section - About & Skills */}
          <motion.section
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Hexagon Profile */}
            <div className="relative w-64 h-72 mx-auto mb-10 animate-pulse">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-400 via-pink-400 to-blue-400 rotate-0 animate-spin-slow clip-hexagon" />
              <div className="absolute inset-1 bg-indigo-950 clip-hexagon flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-500 to-gray-800" />
              </div>
            </div>

            {/* About */}
            <h2 className="text-2xl font-semibold text-blue-400 mb-4 flex items-center gap-2">
              About Me
            </h2>
            <p className="text-indigo-200 leading-relaxed mb-4">
              Welcome to my passionate specialization in bringing digital worlds
              to life through cutting-edge 3D artistry. I transform creative
              visions into stunning visual experiences.
            </p>
            <p className="text-indigo-200 leading-relaxed mb-8">
              I am a master of my craft with expertise in 3D modeling,
              texturing, and animation. My commitment: blending technical skill
              with boundless creativity to deliver immersive visual imaginations.
            </p>

            
            <div className="text-center mt-10">
              <motion.button
                onClick={() => window.location.href = '/my-projects'}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg hover:shadow-pink-400/40"
              >
                View Projects
              </motion.button>
            </div>
          </motion.section>

          {/* Right Section - Milestones Carousel */}
          <motion.section
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-8">
              Milestones & Triumphs
            </h2>
{/* 
            <Swiper 
              spaceBetween={20} 
              modules={[Grid]}
              className="!items-stretch"
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  grid: { rows: 1, fill: "row" },
                },
                640: {
                  slidesPerView: 1,
                  grid: { rows: 1, fill: "row" },
                },
                768: {
                  slidesPerView: 2,
                  grid: { rows: 2, fill: "row" },
                },
              }}
              loop={true}>
              {[ 
                {
                  icon: "🏆",
                  title: "ArtStation Editors' Pick - 2023",
                  // desc: "Recognized for exceptional artistry and innovation in 3D character design.",
                },
                {
                  icon: "📚",
                  title: "3D Artist Magazine - Vol. 182",
                  // desc: "Featured article showcasing advanced texturing techniques and workflow optimization.",
                },
                {
                  icon: "🎯",
                  title: "Lead Character Artist 'Project Emberhom'",
                  // desc: "Directed the creation of hero characters for a AAA gaming title.",
                },
                {
                  icon: "✨",
                  title: "Unreal Engine Certified - 2022",
                  // desc: "Mastered real-time rendering and advanced material creation.",
                },
              ].map((m, i) => (
                <SwiperSlide key={i} className="h-full">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="h-full flex flex-col justify-between bg-indigo-950/70 border border-purple-400/30 rounded-2xl p-8 shadow-md hover:shadow-purple-500/30 transition"
                  >
                    <div className="text-4xl mb-4">{m.icon}</div>
                    <h3 className="text-xl font-semibold text-indigo-100 mb-2">
                      {m.title}
                    </h3>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper> */}

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: "🏆",
                title: "ArtStation Editors' Pick - 2023",
                desc: "Recognized for exceptional artistry and innovation in 3D character design.",
              },
              {
                icon: "📚",
                title: "3D Artist Magazine - Vol. 182",
                desc: "Featured article showcasing advanced texturing techniques and workflow optimization.",
              },
              {
                icon: "🎯",
                title: "Lead Character Artist 'Project Emberhom'",
                desc: "Directed the creation of hero characters for a AAA gaming title.",
              },
              {
                icon: "✨",
                title: "Unreal Engine Certified - 2022",
                desc: "Mastered real-time rendering and advanced material creation.",
              },
            ].map((m, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="flex flex-col justify-between bg-indigo-950/70 
                          border border-purple-400/30 rounded-2xl p-8 
                          shadow-md hover:shadow-purple-500/30 transition h-full"
              >
                <div className="text-4xl mb-4">{m.icon}</div>
                <h3 className="text-xl font-semibold text-indigo-100 mb-2">
                  {m.title}
                </h3>
                <p className="text-indigo-300 leading-relaxed">{m.desc}</p>
              </motion.div>
            ))}
          </div>
          </motion.section>
        </div>
      </main>

      <style jsx global>{`
        .clip-hexagon {
          clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
        }
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
