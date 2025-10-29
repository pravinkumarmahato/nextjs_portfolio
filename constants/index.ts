import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import { MdOutlineWorkOutline, MdOutlineContactMail, MdOutlineSchool } from "react-icons/md";
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { link } from "fs";


export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 60,
    height: 60,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 60,
    height: 60,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Bootstrap",
    Image: "/Bootstrap.png",
    width: 90,
    height: 90,
  },
  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  },
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 90,
    height: 90,
  },
  {
    name: "Python",
    Image: "/python.png",
    width: 80,
    height: 80,
  },
  {
    name: "Django",
    Image: "/django.png",
    width: 80,
    height: 80,
  },
  {
    name: "Flask",
    Image: "/flask.svg",
    width: 60,
    height: 60,
  },
  {
    name: "FastAPI",
    Image: "/fastapi.png",
    width: 200,
    height: 200,
  },
  {
    name: "Numpy",
    Image: "/numpy.png",
    width: 80,
    height: 80,
  },
  {
    name: "Pandas",
    Image: "/pandas.png",
    width: 100,
    height: 100,
  },
  {
    name: "Matplotlib",
    Image: "/matplotlib.png",
    width: 200,
    height: 200,
  },
  {
    name: "Scikit Learn",
    Image: "/scikitlearn.png",
    width: 120,
    height: 120,
  },
  {
    name: "OpenCV",
    Image: "/opencv.webp",
    width: 60,
    height: 60,
  },
  {
    name: "Git",
    Image: "/git.png",
    width: 90,
    height: 90,
  },
  {
    name: "GitHub",
    Image: "/github.png",
    width: 80,
    height: 80,
  },
  {
    name: "Java",
    Image: "/java.webp",
    width: 80,
    height: 80,
  },
  {
    name: "Rest API",
    Image: "/restapi.png",
    width: 90,
    height: 90,
  },
  {
    name: "CI/CD",
    Image: "/cicd.png",
    width: 130,
    height: 130,
  }
  
];

export const Socials = [
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    src: "/LinkedIn.png",
    link: "https://www.linkedin.com/in/pravin-kumar-mahato-433194173/"
  },
  {
    name: "X (Twitter)",
    icon: FaXTwitter,
    src: "/twitter_x.png",
    link: "https://x.com/PravinK98620156"
  }
];

export const Projects = [
  {
    title: "Kube Credential - Issuance & Verification",
    text: "A microservice-based application built with Node.js, TypeScript, React, and Kubernetes, designed to demonstrate secure credential issuance and verification workflows.\nThe system includes two backend services — Issuance and Verification — each powered by PostgreSQL and exposed via RESTful APIs. Both services are containerized and deployed using Kubernetes manifests, ensuring scalability, modularity, and isolation.\nThe frontend, built with React (Vite + TypeScript) and served through Nginx, provides an intuitive interface to issue and verify credentials in real-time.\n\nKey highlights include:\n• Microservice isolation with API-based communication\n• Secure endpoints protected by API keys\n• Pod-level worker identification using environment variables\n• CI-ready Jest testing for both backend and frontend\n• SHA-256-based credential hashing for deterministic IDs\n\nThis project showcases modern DevOps practices, Kubernetes orchestration, and end-to-end full-stack development.",
    src: "/KubeCredential.png",
    github: "https://github.com/pravinkumarmahato/kube-credential",
    video: "",
    live: "http://13.60.235.124:5000/",
    documentation: ""
  },
  {
    title: "Modern Nextjs Portfolio",
    text: "",
    src: "/WebPortfolio.JPG",
    github: "https://github.com/pravinkumarmahato/nextjs_portfolio",
    video: "",
    live: "https://whatsapp-web-clone-client-plum.vercel.app/",
    documentation: ""
  },
  {
    title: "Whatsapp Web Clone",
    text: "A fully functional WhatsApp Web clone built with React, TypeScript, Tailwind CSS, and Socket.io, designed to replicate the real-time messaging experience of WhatsApp Web.\nThe application supports secure authentication, real-time messaging, conversation search, and date-grouped chat history, all within a modern, responsive UI closely inspired by WhatsApp’s original design.\nThe backend, built with Node.js and Express, provides RESTful APIs for user authentication and message management, while Socket.io ensures seamless two-way communication for instant message delivery and read-receipt updates.\nThis project also includes webhook payload processing to handle incoming and outgoing messages dynamically, ensuring real-time synchronization between users.\nTech Stack: React, TypeScript, Tailwind CSS, Material UI, Node.js, Express, Socket.io, MongoDB.\n\nKey Highlights:\n• Real-time chat functionality\n• Secure login and registration\n• WhatsApp-like clean UI\n• Responsive and mobile-friendly\n• REST + WebSocket-based architecture",
    src: "/WhatsappWeb.JPG",
    github: "https://github.com/pravinkumarmahato/Crop-Health-Analysis-using-NDVI",
    video: "",
    live: "https://whatsapp-clone.pravinkumarmahato.dev/",
    documentation: ""
  },
  {
    title: "MultiLang RAG",
    text: "The MultiLang RAG (Retrieval-Augmented Generation) System is a multilingual AI chatbot that allows users to upload documents and ask questions in natural language to receive context-aware answers. The frontend, built with React, TypeScript, Tailwind CSS, and Vite, provides a modern, responsive interface featuring secure JWT authentication, document upload, AI-powered chat, profile management, and light/dark themes.\nThe backend, developed with FastAPI, integrates LangChain, Gemini API, and MongoDB to implement the RAG pipeline — embedding uploaded documents, performing semantic similarity searches, and generating accurate contextual responses.\n\nKey Features:\n• Multilingual AI chat with document context\n• Secure user authentication and profiles\n• Document upload and processing pipeline\n• Real-time chat history retrieval\n• Responsive, glassmorphic UI\n\nTech Stack: React, FastAPI, LangChain, Gemini API, MongoDB, Tailwind CSS",
    src: "/RAG.png",
    github: "https://github.com/pravinkumarmahato/multilang-rag-frontend",
    video: "",
    live: "https://multilang-rag-frontend.onrender.com/",
    documentation: ""
  },
  {
    title: "Human Presence Detection Using RF Signals",
    text: "",
    src: "/RF_Detection.jpg",
    github: "",
    video: "",
    documentation: ""
  },
  {
    title: "Steganography Based Data Hiding",
    text: "A data security application that combines steganography and encryption to ensure secure communication by hiding confidential messages inside images. Built with Python (Kivy, KivyMD), the system allows users to encrypt text using the AES algorithm and conceal it within an image file using LSB (Least Significant Bit) steganography.\nThe same desktop application can later extract and decrypt the hidden message using a valid encryption key, ensuring end-to-end data protection. If an invalid key is used, the system flags a potential unauthorized access attempt.\n\nKey Features:\n• AES-based message encryption and decryption\n• Image-based data concealment using LSB technique\n• Interactive GUI built with KivyMD\n• Secure key-based access validation\n• Visual comparison between original and encoded images\n\nThis project demonstrates the fusion of cryptography, steganography, and GUI-based application development for enhanced information security and privacy.",
    src: "/Steganography.png",
    github: "https://github.com/pravinkumarmahato/Steganography_Based_Data_Hiding",
    video: "",
    documentation: ""
  },
  {
    title: "Lung Capacity Check - Spirometry for Pulmonary Function Test",
    text: "A compact and affordable digital spirometer designed to measure and monitor lung health by calculating key respiratory parameters such as FVC, FEV₁, and PEFR.\nThe device uses the Bernoulli-Venturi principle to determine airflow and volume based on pressure differences within a venturi-shaped tube. These measurements are processed and displayed through a desktop application connected to the handheld spirometer.\nBuilt with Python, MongoDB, and Matplotlib, the system enables data storage, visualization, and result analysis for patients. It also includes an Incentive Spirometry mode, allowing recovering patients to perform guided lung exercises digitally.\nThis project offers a low-cost, portable alternative to traditional bulky spirometers — ideal for rural healthcare centers, diagnostic labs, and pulmonary recovery programs.",
    src: "/Spirometer.png",
    github: "https://github.com/pravinkumarmahato/LungCapacityCheck",
    video: "",
    documentation: ""
  },
  {
    title: "Face Recognition Based Security Camera and Door Unlock System",
    text: "A smart IoT-powered security solution built using Python (Flask, OpenCV) and Raspberry Pi 3.\nThis project enables real-time face recognition to automatically identify individuals and enhance home security.\nWhen someone approaches the door, the Raspberry Pi camera captures their face and compares it with stored images in the MySQL database. If the person is recognized, an email notification is sent to the administrator.\nThrough a Flask web app, the admin can view live video, manage user data, and remotely unlock the door using a connected solenoid lock via relay control.\nIt showcases seamless integration of IoT hardware, computer vision, and web technologies, offering a modern, automated approach to home security with live monitoring and remote access capabilities.",
    src: "/FaceRecognition.JPG",
    github: "https://github.com/pravinkumarmahato/Face-Recognition-Based-Security-Camera-and-Door-Unlock-System",
    video: "",
    documentation: ""
  },
  {
    title: "Precision Agriculture Using Normalized Difference Vegetation Index",
    text: "This project leverages NDVI (Normalized Difference Vegetation Index) to analyze crop health through image-based vegetation assessment. NDVI helps farmers and researchers evaluate the vitality of crops by measuring how plants reflect near-infrared (NIR) and red light—healthy plants reflect more NIR and absorb more red light.\nBuilt with Python (Flask, PIL), the system processes RGB and NIR images to compute NDVI values and visualize crop health on a web interface. The application enables users to monitor plant conditions, detect early signs of stress or disease, and make data-driven agricultural decisions.\n\nKey Features:\n• NDVI-based vegetation health analysis\n• Integration of RGB & NIR imagery\n• Flask-based interactive web application\n• Visual NDVI output for easy interpretation\n• Supports precision farming and crop monitoring\n\nThis project bridges remote sensing, image processing, and web technology to promote sustainable precision agriculture.",
    src: "/NDVI.png",
    github: "https://github.com/pravinkumarmahato/Crop-Health-Analysis-using-NDVI",
    video: "https://www.youtube.com/embed/MoILI6NdK5Q ",
    explaination: "https://www.youtube.com/embed/L9qOARq9S9k",
    documentation: ""
  },
  {
    title: "RFID-Based Attendance Management System",
    text: "An IoT-powered solution that automates student attendance using RFID (Radio Frequency Identification) technology. Each student is assigned an RFID card that acts as a unique digital ID. When scanned near the RFID reader, the NodeMCU (ESP8266) microcontroller validates the card and automatically records attendance in the MySQL database.\nThe system eliminates manual errors, saves time, and ensures accurate attendance tracking. Users receive real-time feedback on an LCD display, and attendance data is accessible through a web portal built with HTML, CSS, Bootstrap, and PHP for Admin, Faculty, and Students.\n\nKey Features:\n• Automated attendance via RFID\n• Secure role-based login\n• Real-time attendance records\n• LCD feedback for each scan\n• Database-driven reporting\n\nThis project demonstrates seamless integration of embedded systems, web technologies, and IoT automation to modernize traditional attendance management.",
    src: "/RFID.JPG",
    github: "https://github.com/pravinkumarmahato/RFID-Based-Attendance-Management-System",
    video: "",
    documentation: ""
  },
];

export const education = [
  {
    degree: "Masters of Computer Applications (MCA)",
    institute: "Vellore Institute of Technology, Vellore",
    date: "2022-2024",
    grade: "8.31 CGPA",
    contents: [
      ""
    ],
  },
  {
    degree: "Bachelor of Science in Information Technology (BSc. IT)",
    institute: "Kishinchand Chellaram College, Mumbai University",
    date: "2019-2022",
    grade: "9.20 CGPA",
    contents: [
      "",
    ],
  },
  // {
  //   degree: "12th Science (PCMB)",
  //   institute: "Kendriya Vidyalaya N.A.D. Karanja",
  //   date: "2017-2019",
  //   grade: "61.40 %",
  //   contents: [
  //     "",
  //   ],
  // },
  // {
  //   degree: "10th",
  //   institute: "Kendriya Vidyalaya N.A.D. Karanja",
  //   date: "2016-2017",
  //   grade: "8 CGPA",
  //   contents: [
  //     "",
  //   ],
  // }
];

export const experiences = [
  {
    title: "Software Developer",
    company: "Kaiburr",
    date: "August 2024 - June 2025",
    contents: [
      "",
    ],
  },
  {
    title: "Software Developer Intern",
    company: "Kaiburr",
    date: "November 2023 - July 2024",
    contents: [
      "",
    ],
  },
  {
    title: "Intern",
    company: "Curaksha",
    date: "November 2020 - June 2021",
    contents: [
      "",
    ],
  },
  {
    title: "Web Developer Intern",
    company: "Sahu Technology",
    date: "August 2020 - August 2020",
    contents: [
      "",
    ],
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/my-experience",
    icon: MdOutlineWorkOutline,
    link: "/my-experience",
  },
  {
    name: "/my-education",
    icon: MdOutlineSchool,
    link: "/my-education",
  },
  {
    name: "/contact-me",
    icon: MdOutlineContactMail,
    link: "/contact-me",
  },
];