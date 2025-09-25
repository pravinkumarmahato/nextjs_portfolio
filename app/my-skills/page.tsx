"use client"
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { SkillData } from '@/constants'
import Image from 'next/image'
import {Autoplay} from 'swiper/modules'


const page = () => {
  return (
    <div style = {{backgroundImage: "url(/bg-4.png)"}}
    className='h-screen w-screen flex items-center justify-center bg-cover bg-center'>
      <div className='flex flex-col gap-20 max-w-[80%] text-center items-center'>
        <div className='flex flex-col items-center gap-4'>
          <h1 className='font-semibold text-white text-[50px]'>
            Skills
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              {" "}
              &{" "}
            </span>
            Technologies
          </h1>
          <p className='text-gray-400 text-[20px]'>
            Using the latest Technologies this world has to offer
          </p>
        </div>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className='max-w-[80%]'
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full" style={{height: '120px'}}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: true,
          }}
          speed={5000}
          modules={[Autoplay]}
          className='max-w-[80%]'
        >
          {SkillData.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center items-center w-full" style={{height: '120px'}}>
                <Image
                  src={skill.Image}
                  alt={skill.name}
                  width={skill.width}
                  height={skill.height}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default page