"use client"
import { Socials } from "@/constants"
import Image from "next/image"
import React from "react"
import { motion } from "framer-motion";

const Navbar = () => {
    return (
        <div className="fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20">
            <div className="flex flex-row gap-3 items-center">
                <div className="relative">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="sm:block hidden">
                    <span className="text-gray-200 text-[25px] font-semibold">
                        Pravin Kumar Mahato
                    </span><br />
                    <span className="text-gray-400 font-semibold">
                        Software Engineer
                    </span>
                </div>
            </div>
            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex flex-row gap-6 mb-2"
                >
                {Socials.map((social) => (
                    <motion.a
                        key={social.name}
                        href={social.link}
                        whileHover={{ scale: 1.3, rotate: 15 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-gray-400 hover:text-purple-500 text-3xl"
                        >
                        <social.icon />
                    </motion.a>
                ))}
            </motion.div>
        </div>
    );
};

export default Navbar