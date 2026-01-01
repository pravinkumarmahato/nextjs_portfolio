"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { achievements } from "@/constants/index";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12,
    },
  },
};

const floatingAnimation = {
  y: [-8, 8, -8],
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

// 3D Tilt Card Component
function AchievementCard({ achievement, index }: { achievement: typeof achievements[0]; index: number }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  const springRotateX = useSpring(rotateX, { stiffness: 300, damping: 30 });
  const springRotateY = useSpring(rotateY, { stiffness: 300, damping: 30 });

  function handleMouse(event: React.MouseEvent<HTMLDivElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      variants={itemVariants}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, z: 50 }}
      className="group relative"
    >
      {/* Glow effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-r ${achievement.color} rounded-2xl blur opacity-0 group-hover:opacity-40 transition-opacity duration-500`} />
      
      {/* Card */}
      <div className="relative h-full backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-5 overflow-hidden">
        {/* Animated gradient border */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-20`} />
        </div>

        {/* Shine effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
        </div>

        {/* Content */}
        <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
          {/* Icon and Badge */}
          <div className="flex items-start justify-between mb-3">
            <motion.div 
              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center text-2xl shadow-lg`}
              whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              {achievement.icon}
            </motion.div>
            <span className="text-[10px] font-medium text-white/50 bg-white/5 px-2 py-1 rounded-full border border-white/10">
              {achievement.issuer}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-base font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/80 transition-all">
            {achievement.title}
          </h3>
          <p className={`text-xs font-medium bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent mb-2`}>
            {achievement.subtitle}
          </p>

          {/* Description */}
          <p className="text-xs text-white/60 leading-relaxed line-clamp-3">
            {achievement.desc}
          </p>
        </div>

        {/* Corner decoration */}
        <div className={`absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br ${achievement.color} opacity-10 rounded-full blur-2xl group-hover:opacity-30 transition-opacity`} />
      </div>
    </motion.div>
  );
}

const page = () => {
  return (
    <div
      style={{ backgroundImage: "url(/bg-16.png)" }}
      className="w-screen h-screen bg-cover bg-center bg-fixed overflow-hidden"
    >
      {/* Hide scrollbar CSS */}
      <style jsx global>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      {/* Animated gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-950/80 via-purple-950/60 to-slate-950/80 pointer-events-none" />

      {/* Floating orbs */}
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, -80, 0],
          y: [0, 80, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="fixed bottom-20 right-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, 40, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="fixed top-1/2 left-1/3 w-48 h-48 bg-pink-500/20 rounded-full blur-[80px] pointer-events-none"
      />

      {/* Particle grid */}
      <div className="fixed inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Scrollable content container - starts below navbar */}
      <div className="absolute top-20 left-0 right-0 bottom-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <main className="relative z-10 max-w-7xl mx-auto px-6 py-8 pb-32">
        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Profile & About */}
          <motion.section
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* 3D Profile Image Container */}
            <motion.div
              className="relative w-72 h-72 mx-auto mb-12"
              animate={floatingAnimation}
            >
              {/* Rotating rings */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0"
              >
                <div className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/30" />
              </motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4"
              >
                <div className="absolute inset-0 rounded-full border border-cyan-500/20" />
              </motion.div>

              {/* Glowing backdrop */}
              <div className="absolute inset-8 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-full blur-2xl opacity-40 animate-pulse" />

              {/* Main image container - Circular */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="absolute inset-8 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
              >
                {/* Profile image */}
                <div className="w-full h-full bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900 flex items-center justify-center">
                  <Image 
                    src="/ProfilePhoto.png" 
                    alt="Profile"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Overlay shine */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-full" />
              </motion.div>

              {/* Floating particles around image */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut",
                  }}
                  className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </motion.div>

            {/* About Me Content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              {/* Section Title */}
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full" />
                <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
                  About Me
                </h2>
              </motion.div>

              {/* Bio paragraphs with staggered animation */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="space-y-4"
              >
                <motion.p variants={itemVariants} className="text-white/70 leading-relaxed text-sm">
                  I&apos;m a <span className="text-cyan-300 font-medium">full-stack software engineer</span> with around two years of experience building production-grade web applications and AI-powered systems. I enjoy working across the stack - from designing clean APIs and scalable backend services to building intuitive user interfaces.
                </motion.p>
                <motion.p variants={itemVariants} className="text-white/70 leading-relaxed text-sm">
                  Worked at a <span className="text-purple-300 font-medium">US-based product startup</span>, shipping end-to-end features using Python, TypeScript, React, and cloud infrastructure. Built AI-driven workflows including RAG systems, data pipelines, and customer-facing APIs.
                </motion.p>
                <motion.p variants={itemVariants} className="text-white/70 leading-relaxed text-sm">
                  I care deeply about <span className="text-pink-300 font-medium">code quality, system reliability, and user experience</span>, while valuing speed and pragmatism. I thrive in fast-moving environments and love turning messy problems into simple, maintainable solutions.
                </motion.p>
                <motion.p variants={itemVariants} className="text-white/70 leading-relaxed text-sm">
                  Outside work, I explore <span className="text-amber-300 font-medium">AI, distributed systems, and real-world integrations</span> through side projects. Always curious, always learning.
                </motion.p>
              </motion.div>

              {/* CTA Button */}
              <motion.div 
                className="mt-8 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
              >
                <motion.button
                  onClick={() => (window.location.href = "/my-projects")}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(168, 85, 247, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="group relative px-8 py-4 rounded-2xl overflow-hidden"
                >
                  {/* Button gradient background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-500 blur-xl opacity-50 group-hover:opacity-80 transition-opacity" />
                  
                  {/* Animated shine */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>

                  <span className="relative z-10 text-white font-semibold flex items-center gap-2">
                    View My Projects
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.span>
                  </span>
                </motion.button>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Right Section - Achievements */}
          <motion.section
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Section Title */}
            <motion.div
              className="text-center mb-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="inline-block"
                style={{ backgroundSize: "200% auto" }}
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-amber-300 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Honors & Awards
                </h2>
              </motion.div>
              <motion.p 
                className="text-white/50 mt-2 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Recognition for technical excellence and innovation
              </motion.p>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              style={{ perspective: "1000px" }}
            >
              {achievements.map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} index={index} />
              ))}
            </motion.div>

            
          </motion.section>
        </div>
        </main>
      </div>
    </div>
  );
};

export default page;