"use client";
import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'
import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.20,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, type: 'spring', stiffness: 60 } },
};

const page = () => {
  return (
    <div style={{backgroundImage: "url('/bg-5.png')"}}
     className='w-screen h-screen flex items-center justify-center bg-center bg-cover'>
      <motion.div
        className='grid 2xl:grid-cols-3 xl:grid-cols-2 gap-5 max-w-[90%] max-h-90%]'
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {Projects.map((project, index) => (
          <motion.div key={index} variants={cardVariants}>
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default page