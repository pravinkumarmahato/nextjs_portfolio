"use client";
import { motion } from "framer-motion";
import React from "react";

type ExperienceItem = {
  date: string;
  title: string;
  company: string;
  contents: string[];
};

type EducationItem = {
  date: string;
  degree: string;
  institute: string;
  grade: string;
  contents: string[];
};

type TimelineItem = ExperienceItem | EducationItem;

interface TimelineProps {
  data: TimelineItem[];
  title: string;
}

export const Timeline: React.FC<TimelineProps> = ({ data, title }) => {

  return (
    <div className="pt-[100px]">
      <h1 className="text-center font-semibold text-white text-[45px]">{title}</h1>
      <div
        className="relative pb-20 mt-[0px] scrollbar-hide w-full "
        style={{
          maxHeight: '85vh',
          overflowY: 'auto',
          width: '100%',
        }}
      >
        {data.map((item, index) => {
          const isEducation = 'degree' in item;
          const isLeft = index % 2 === 0;
          const fromX = isLeft ? -80 : 80;
          return (
            <div key={index} className="relative flex w-full min-h-[220px] md:min-h-[260px] md:mb-10 mb-6">
              {/* Left content */}
              <div className={`hidden md:flex w-1/2 justify-end pr-12 ${isLeft ? '' : 'opacity-0 pointer-events-none'}`}>
                {isLeft && (
                  <motion.div
                    className="flex flex-col gap-2 max-w-md items-end text-right justify-center"
                    initial={{ opacity: 0, x: fromX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 60 }}
                  >
                    <div className="inline-block bg-black/70 rounded-lg p-4 shadow-lg hover:shadow-purple-400/30 transition-shadow duration-300">
                      <div className="text-lg font-bold text-purple-400 mb-1">{item.date}</div>
                      {isEducation ? (
                        <>
                          <div className="text-2xl font-bold text-neutral-300 mb-2">{(item as EducationItem).degree}</div>
                          <div className="text-xl font-semibold text-neutral-400 mb-2">{(item as EducationItem).institute}</div>
                          <div className="text-lg font-semibold text-neutral-400 mb-2">Grade: {(item as EducationItem).grade}</div>
                        </>
                      ) : (
                        <>
                          <div className="text-2xl font-bold text-neutral-300">{(item as ExperienceItem).title}</div>
                          <div className="text-xl text-neutral-400 mb-2">{(item as ExperienceItem).company}</div>
                        </>
                      )}
                      {item.contents.map((content, idx) => (
                        <p className="mb-2 font-normal text-neutral-400" key={idx}>{content}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
              {/* Timeline line and dot */}
              <div className="hidden md:flex flex-col items-center justify-center w-0 relative z-10 mx-8">
                <div className="h-full w-[6px] bg-gradient-to-b from-purple-500 via-neutral-700 to-purple-500 rounded-full" style={{ minHeight: '120px' }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-midnight flex items-center justify-center border-4 border-purple-400 shadow-lg">
                  <div className="w-4 h-4 rounded-full bg-purple-400" />
                </div>
              </div>
              {/* Right content */}
              <div className={`hidden md:flex w-1/2 justify-start pl-12 ${!isLeft ? '' : 'opacity-0 pointer-events-none'}`}>
                {!isLeft && (
                  <motion.div
                    className="flex flex-col gap-2 max-w-md items-start text-left justify-center"
                    initial={{ opacity: 0, x: fromX }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 60 }}
                  >
                    <div className="inline-block bg-black/70 rounded-lg p-4 shadow-lg hover:shadow-purple-400/30 transition-shadow duration-300">
                      <div className="text-lg font-bold text-purple-400 mb-1">{item.date}</div>
                      {isEducation ? (
                        <>
                          <div className="text-2xl font-bold text-neutral-300 mb-2">{(item as EducationItem).degree}</div>
                          <div className="text-xl font-semibold text-neutral-400 mb-2">{(item as EducationItem).institute}</div>
                          <div className="text-lg font-semibold text-neutral-400 mb-2">Grade: {(item as EducationItem).grade}</div>
                        </>
                      ) : (
                        <>
                          <div className="text-2xl font-bold text-neutral-300">{(item as ExperienceItem).title}</div>
                          <div className="text-xl text-neutral-400 mb-2">{(item as ExperienceItem).company}</div>
                        </>
                      )}
                      {item.contents.map((content, idx) => (
                        <p className="mb-2 font-normal text-neutral-400" key={idx}>{content}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>
              {/* Mobile view: single column */}
              <motion.div
                className="md:hidden w-full flex flex-col gap-4 px-2"
                initial={{ opacity: 0, x: fromX }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 60 }}
              >
                <div className="inline-block bg-black/60 rounded-lg p-4 shadow-lg hover:shadow-purple-400/30 transition-shadow duration-300">
                  <div className="text-lg font-bold text-purple-400 mb-1">{item.date}</div>
                  {isEducation ? (
                    <>
                      <div className="text-2xl font-bold text-neutral-300">{(item as EducationItem).degree}</div>
                      <div className="text-xl text-neutral-400 mb-2">{(item as EducationItem).institute}</div>
                    </>
                  ) : (
                    <>
                      <div className="text-2xl font-bold text-neutral-300">{(item as ExperienceItem).title}</div>
                      <div className="text-xl text-neutral-400 mb-2">{(item as ExperienceItem).company}</div>
                    </>
                  )}
                  {item.contents.map((content, idx) => (
                    <p className="mb-2 font-normal text-neutral-400" key={idx}>{content}</p>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
        
      </div>
    </div>
  );
};