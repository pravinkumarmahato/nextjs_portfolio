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
    title: "Modern Nextjs Portfolio",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    src: "/WebPortfolio.JPG",
    github: "https://github.com/yourusername/nextjs-website",
    video: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    documentation: "https://yourwebsite.com/docs/nextjs-website"
  },
    {
    title: "Whatsapp Web Clone",
    text: "",
    src: "/WhatsappWeb.JPG",
    github: "https://github.com/pravinkumarmahato/Crop-Health-Analysis-using-NDVI",
    video: "",
    live: "https://whatsapp-web-clone-client-plum.vercel.app/",
    documentation: ""
  },
  {
    title: "MultiLang RAG",
    text: "",
    src: "/RAG.png",
    github: "https://github.com/pravinkumarmahato/multilang-rag-frontend",
    video: "",
    live: "https://whatsapp-web-clone-client-plum.vercel.app/",
    documentation: ""
  },
  {
    title: "Steganography Based Data Hiding",
    text: "Steganography enhances information security by hiding messages, images, or data within other data, making detection harder than traditional cryptography. This study combines steganography with encryption for greater protection. A desktop application enables users to encrypt a message, embed it in an image, and later extract and decrypt it securely.",
    src: "/Steganography.png",
    github: "https://github.com/pravinkumarmahato/Steganography_Based_Data_Hiding",
    video: "",
    documentation: ""
  },
  {
    title: "Face Recognition Based Security Camera and Door Unlock System",
    text: "This project uses Raspberry Pi 3 for face recognition-based door unlocking. A camera captures live video, and a solenoid lock (powered via relay and 12V supply) secures the door. A Flask web app with MySQL manages users, streams video, sends email alerts, and remotely controls door access using Python’s face-recognition and OpenCV.",
    src: "/FaceRecognition.JPG",
    github: "https://github.com/pravinkumarmahato/Face-Recognition-Based-Security-Camera-and-Door-Unlock-System",
    video: "",
    documentation: ""
  },
  {
    title: "Precision Agriculture Using Normalized Difference Vegetation Index",
    text: "Understanding your crops health status isn't the easiest thing to do. Sure, you can use the 'eye test', and a number of foliar contact and direct measurement techniques. But, what if there was an easy, fast and efficient way to see the health of plants and their status and progress over time? That's where Normalized Difference Vegetation Index (NDVI) data comes in.",
    src: "/NDVI.png",
    github: "https://github.com/pravinkumarmahato/Crop-Health-Analysis-using-NDVI",
    video: "https://drive.google.com/file/d/1lGD-7GHLMRJwrAEL9ck70HCgO3ysMzOh/view?usp=sharing",
    explaination: "https://drive.google.com/file/d/1AmsfofBZpDbOTCni3IlmD5OXvtTxnxYS/view?usp=sharing",
    documentation: ""
  },
];

export const education = [
  {
    degree: "Masters of Computer Applications (MCA)",
    institute: "Vellore Institute of Technology, Vellore",
    date: "2022-2024",
    contents: [
      ""
    ],
  },
  {
    degree: "Bachelor of Science in Information Technology (BSc. IT)",
    institute: "Kishinchand Chellaram College, Mumbai University",
    date: "2019-2022",
    contents: [
      "",
    ],
  },
  {
    degree: "12th Science (PCMB)",
    institute: "Kendriya Vidyalaya N.A.D. Karanja",
    date: "2017-2019",
    contents: [
      "",
    ],
  },
  {
    degree: "10th",
    institute: "Kendriya Vidyalaya N.A.D. Karanja",
    date: "2016-2017",
    contents: [
      "",
    ],
  }
];

export const experiences = [
  {
    title: "Software Developer",
    company: "Kaiburr",
    date: "August 2023 - June 2025",
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