"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEye, FaGithub, FaBook, FaVideo } from 'react-icons/fa'

interface Project {
  title: string;
  text: string;
  src: string;
  github?: string;
  video?: string;
  documentation?: string;
}

interface Props {
  project: Project;
}

const ProjectCard = ({ project }: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  function handleFlip() {
    if (!isAnimating) {
      setIsFlipped(!isFlipped);
      setIsAnimating(true);
    }
  }

  function handleEyeClick(e: React.MouseEvent) {
    e.stopPropagation();
    setShowModal(true);
    setShowVideo(false);
  }

  function handleCloseModal() {
    setShowModal(false);
    setShowVideo(false);
  }

  function handleVideoClick(e: React.MouseEvent) {
    e.preventDefault();
    setShowVideo(true);
  }

  return (
    <>
      <div
        onClick={handleFlip}
        className='w-[450px] h-[280px] rounded-md cursor-pointer relative'>
        <motion.div
          className='flip-card-inner w-full h-full'
          initial={false}
          animate={{ rotateY: isFlipped ? 180 : 360 }}
          transition={{ duration: 0.6, animationDirection: 'normal' }}
          onAnimationComplete={() => setIsAnimating(false)}
        >
          <div
            style={{ backgroundImage: `url(${project.src})` }}
            className='w-full h-full group relative flip-card-front bg-contain bg-no-repeat bg-center text-white rounded-lg p-4'>
            <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-0 group-hover:opacity-40' />
            <div className='absolute inset-0 w-full h-full text-[20px] pb-10 hidden group-hover:flex items-center z-[20] justify-center'>
              Learn more &gt;
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${project.src})` }}
            className='w-full h-full group relative flip-card-back bg-contain bg-no-repeat bg-center text-white rounded-lg p-4'>
            <div className='absolute inset-0 w-full h-full rounded-md bg-black opacity-50' />
            <div className='flex flex-col gap-10 py-3 z-[30] h-full justify-between'>
              <div>
                <h1 className='text-white text-2xl font-semibold'>{project.title}</h1>
                {/* <p className='text-gray-200 text-[17px]'>{project.text}</p> */}
              </div>
              <button
                className='self-end bg-white bg-opacity-20 hover:bg-opacity-40 rounded-full p-3 text-white flex items-center justify-center z-40'
                onClick={handleEyeClick}
                title='View Details'
              >
                <FaEye size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal Popup */}
      {showModal && (
        <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60'>
          <div className='bg-white rounded-lg shadow-lg p-8 max-w-lg w-full relative'>
            <button
              className='absolute top-2 right-2 text-gray-600 hover:text-black text-2xl font-bold'
              onClick={handleCloseModal}
              aria-label='Close'
            >
              &times;
            </button>
            <h2 className='text-2xl font-bold mb-2'>{project.title}</h2>
            <p className='mb-4 text-gray-700'>{project.text}</p>
            <div className='flex flex-wrap gap-4 mb-4'>
              {project.github && (
                <a href={project.github} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 text-blue-600 hover:underline'>
                  <FaGithub /> GitHub
                </a>
              )}
              {project.documentation && project.documentation !== '' && (
                <a href={project.documentation} target='_blank' rel='noopener noreferrer' className='flex items-center gap-2 text-green-700 hover:underline'>
                  <FaBook /> Docs
                </a>
              )}
              {project.video && project.video !== '' && (
                <button onClick={handleVideoClick} className='flex items-center gap-2 text-red-600 hover:underline'>
                  <FaVideo /> Video Demo
                </button>
              )}
            </div>
            {showVideo && project.video && (
              <div className='w-full aspect-video mt-4'>
                <iframe
                  src={project.video}
                  title='Demo Video'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                  className='w-full h-64 rounded-md border'
                />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard