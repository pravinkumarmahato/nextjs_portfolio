"use client"
import Image from "next/image"
import Link from "next/link"
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{ backgroundImage: "url(/bg-1.png)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
              Hello,  I&apos;m{" "}
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500">
              <TypeAnimation
              sequence={[
                "Pravin Kumar Mahato",
                1000,
                "Software Engineer",
                1000,
                "Full Stack Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
              {/* Software Engineer */}
            </span>
          </h1>
          <p className=" hidden md:block text-gray-300">
            I am a software engineer specializing in building exceptional digital experiences.
            Currently, I am focused on building responsive full-stack web applications.
          </p>
          <div className="flex-col md:flex-row hidden md:flex gap-5">
            <Link href="/about-me" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Learn More
            </Link>
            <Link href="/my-projects" className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              My Projects
            </Link>
            <Link href="/contact-me" className="rounded-[20px] group relative bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hover:opacity-20"/>
              Contact Me
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
        <Link href="/about-me" className="rounded-[20px] bg-blue-500 px-5 py-3 text-lg text-white max-w-[200px]">
          Learn More
        </Link>
        <Link href="/my-projects" className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          My Projects
        </Link>
        <Link href="/contact-me" className="rounded-[20px] bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]">
          Contact Me
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image 
          src="/horse.png" 
          alt="Horse" 
          width={300} 
          height={300} 
          className="absolute right-[220px] top-40" />

        <Image src="/cliff.webp" alt="cliff" width={480} height={480} />
      </div>

      {/* <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image 
          src="/trees.webp"
          alt="Trees"
          width={2000}
          height={2000}
          className="w-full h-full"
        />
      </div> */}
      <Image 
          src="/stars.png" 
          alt="Stars" 
          width={300} 
          height={300} 
          className="absolute top-10 left-0 z-[10]" />

    </main>
  );
}
