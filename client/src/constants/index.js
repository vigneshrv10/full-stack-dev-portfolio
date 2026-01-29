
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaCode, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaPython, FaNodeJs, FaDatabase, FaAndroid } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiGeeksforgeeks, SiHackerrank, SiTailwindcss, SiExpress, SiMysql, SiMongodb, SiPostman, SiLinux, SiFramer, SiFlask, SiBootstrap } from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { TbWorld } from "react-icons/tb";
import profileImg from "../assets/profile.jpg";

export const PERSONAL_DETAILS = {
    name: "Vignesh Ravikrindhi",
    role: "Full Stack Developer | MERN | AI & Backend Enthusiast",
    bio: "Passionate Computer Science student and Full Stack Developer with strong experience in MERN, backend systems, AI-driven applications, and real-world projects. IEEE published author and competitive coder.",
    email: "vigneshravikrindi05@gmail.com",
    phone: "+91 8639185882",
    location: "India",
    resumeLink: "https://drive.google.com/file/d/1oPhiB5nehl8z6642he8oFarwxfQc-eRD/view?usp=sharing",
    // Google Drive direct link conversion: /file/d/ID/view -> https://drive.google.com/uc?export=view&id=ID
    profileImg: profileImg,
};

export const SOCIAL_LINKS = [
    { name: "LinkedIn", url: "https://www.linkedin.com/in/vigneshrv10/", icon: FaLinkedin },
    { name: "GitHub", url: "https://github.com/vigneshrv10", icon: FaGithub },
    { name: "LeetCode", url: "https://leetcode.com/u/vigneshrv10/", icon: SiLeetcode },
    { name: "CodeChef", url: "https://www.codechef.com/users/kl_99220041334", icon: SiCodechef },
    { name: "Email", url: "mailto:vigneshravikrindi05@gmail.com", icon: FaEnvelope },
];

export const PROJECTS = [
    {
        title: "Smart Wardrobe (AI-driven)",
        github: "https://github.com/vigneshrv10/AI-driven-smart-wardrobe",
        live: "https://vigneshrvwardrobe.vercel.app/",
        description: "AI-powered wardrobe recommendation system based on weather and preferences.",
        tech: ["AI", "React", "Node.js"],
        featured: true,
    },
    {
        title: "Connect Four Game",
        github: "https://github.com/vigneshrv10/Connect-Four-Game",
        live: "https://vigneshrv10.github.io/Connect-Four-Game/",
        description: "Interactive browser-based Connect Four game with clean UI.",
        tech: ["HTML", "CSS", "JS"],
        featured: true,
    },
    {
        title: "3D Animated Portfolio",
        github: "https://github.com/vigneshrv10/code-impact-vignesh-portfolio",
        live: "https://vigneshrv-portfolio.vercel.app/",
        description: "Personal portfolio with 3D animations and interactive elements.",
        tech: ["React", "Three.js", "Framer Motion"],
        featured: true,
    },
    {
        title: "Smart Waste Management System",
        github: "https://github.com/vigneshrv10/garbage_classification",
        live: "https://vigneshrv10-exsel.streamlit.app/",
        description: "Waste classification system using machine learning.",
        tech: ["Python", "Streamlit", "ML"],
        featured: true,
    },
    {
        title: "Green Quest",
        github: "https://github.com/vigneshrv10/frontend_batttle",
        live: "https://frontend-batttle.vercel.app/",
        description: "Gamified environmental awareness platform.",
        tech: ["React", "Frontend"],
        featured: true,
    },
    {
        title: "Chimtu Tinder",
        github: "https://github.com/vigneshrv10/chimtu-s-tinder",
        live: "https://vigneshrv10.github.io/chimtu-s-tinder/",
        description: "A fun dating app clone with swipe mechanics.",
        tech: ["HTML", "CSS", "JS"],
        featured: true,
    },
    {
        title: "Blogging Platform",
        github: "https://github.com/vigneshrv10/SEO-Optimized-multi-featured-blogging-platform",
        description: "SEO Optimized multi-featured blogging platform.",
        tech: ["MERN", "SEO"],
        featured: false,
    },
    {
        title: "File Sharing System",
        github: "https://github.com/vigneshrv10/File-Sharing-System-using-Flask-Framework",
        description: "Secure file sharing system built with Flask.",
        tech: ["Flask", "Python"],
        featured: false,
    },
    {
        title: "E-Medical Services App",
        github: "https://github.com/vigneshrv10/E-Medical-Services-App",
        description: "Platform for accessing medical services and consultations.",
        tech: ["MERN"],
        featured: false,
    },
    {
        title: "Plant Disease Detection",
        github: "https://github.com/vigneshrv10/E-Medical-Services-App",
        description: "Detect plant diseases using image processing.",
        tech: ["Python", "AI"],
        featured: false,
    },
    {
        title: "Food Munch",
        github: "https://github.com/vigneshrv10/food-munch-restaurant-website",
        description: "Responsive restaurant website.",
        tech: ["HTML", "CSS", "Bootstrap"],
        featured: false,
    },
    {
        title: "Tourism App",
        github: "https://github.com/vigneshrv10/Tourism-App-For-Mobile-",
        description: "Mobile application for tourism guides.",
        tech: ["Android/React Native"],
        featured: false,
    },
    {
        title: "Civil Services Quiz App",
        github: "https://github.com/vigneshrv10/99220041334_-brain-teaser-using-node.js",
        description: "Quiz app for civil services prep using Node.js.",
        tech: ["Node.js"],
        featured: false,
    },
    {
        title: "Podcast App",
        github: "https://github.com/vigneshrv10/podcast-app-for-mobile",
        description: "Mobile application for streaming podcasts.",
        tech: ["Mobile Dev"],
        featured: false,
    },
];

export const EXPERIENCE = [
    {
        role: "Software Engineer Intern",
        company: "BlueStock Fintech",
        location: "Pune, India",
        year: "2025",
        logo: "https://bluestock.in/static/assets/logo/logo.webp",
        description: [
            "Developed backend application for IPO Application.",
            "Learned Version Control, Optimized database queries.",
            "Fixed UI bugs, designed database and maintenance.",
        ],
    },
];

export const EDUCATION = [
    {
        degree: "MERN Stack Development",
        institution: "NxtWave Academy",
        year: "2025 - 2026",
        grade: "CGPA: 9.4 / 10",
        logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg",
    },
    {
        degree: "Bachelors in Computer Science",
        institution: "Kalasalingam University",
        year: "2022 - 2026",
        grade: "CGPA: 8.34 / 10",
        logo: "https://www.kalasalingam.ac.in/wp-content/uploads/2022/02/Logo.png",
    },
];

export const SKILLS = [
    {
        category: "Programming",
        items: [
            { name: "JavaScript", icon: FaJs },
            { name: "Java", icon: FaJava },
            { name: "Python", icon: FaPython }
        ]
    },
    {
        category: "Frontend",
        items: [
            { name: "HTML5", icon: FaHtml5 },
            { name: "CSS3", icon: FaCss3Alt },
            { name: "React.js", icon: FaReact },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Framer Motion", icon: SiFramer }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "Flask", icon: SiFlask },
            { name: "RESTful APIs", icon: TbWorld }
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "MySQL", icon: SiMysql },
            { name: "MongoDB", icon: SiMongodb }
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git/GitHub", icon: FaGithub },
            { name: "VS Code", icon: VscCode },
            { name: "Postman", icon: SiPostman },
            { name: "Linux", icon: SiLinux }
        ]
    },
    {
        category: "CS Fundamentals",
        items: [
            { name: "OOPs", },
            { name: "DSA", },
            { name: "OS", },
            { name: "System Design", }
        ]
    },
];

export const TUTORIALS = [
    {
        title: "Java Practice",
        github: "https://github.com/vigneshrv10/my-java-practice",
        description: "Beginner-friendly Java concepts, OOPs, and interview prep.",
    },
    {
        title: "Dynamic Web Building",
        github: "https://github.com/vigneshrv10/Dynamic-Web-Application-practice",
        description: "Hands-on frontend + backend concepts for dynamic webs.",
    },
    {
        title: "Cognizant Prep",
        github: "https://github.com/vigneshrv10/CTS-prep",
        description: "Placement-focused coding and step by step solution.",
    },
];

export const CERTIFICATIONS = [
    { title: "Backend Development with Node.js", issuer: "IBM", link: "https://www.coursera.org/account/accomplishments/verify/HJ24EHGCDAFD", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { title: "Build Your Own Static Website", issuer: "NxtWave", link: "https://certificates.ccbp.in/intensive/static-website?id=DTCLNEJPHT", logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
    { title: "Build Your Own Responsive Website", issuer: "NxtWave", link: "https://certificates.ccbp.in/intensive/responsive-website?id=GDAVSRZVPK", logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
    { title: "Introduction to Databases", issuer: "NxtWave", link: "https://certificates.ccbp.in/intensive/introduction-to-databases?id=WXRDQUYOTU", logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
    { title: "Programming Foundations with Python", issuer: "NxtWave", link: "https://certificates.ccbp.in/intensive/programming-foundations?id=CBFCPYWXPR", logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
    { title: "Build Your Own Dynamic Web App", issuer: "NxtWave", link: "https://certificates.ccbp.in/intensive/dynamic-web-application?id=WJLLVDUOFL", logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
    { title: "Developer Foundations", issuer: "NxtWave", link: "https://certificates.ccbp.in/intensive/developer-foundations?id=IUHIIWGETI", logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
    { title: "Responsive Web Design (Flexbox)", issuer: "NxtWave", link: "https://certificates.ccbp.in/intensive/flexbox?id=QDZPBFUHPN", logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
    { title: "Javascript Essentials", issuer: "NxtWave", link: "https://certificates.ccbp.in/intensive/javascript-essentials?id=BXQHTDRBUT", logo: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/Nxtwave_Colored.svg" },
    { title: "Postman API Fundamentals", issuer: "Postman", link: "https://api.badgr.io/public/assertions/dQms7-q-TnKQ_1yfIu_XkA", logo: "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png" },
    { title: "CSS Complete Course", issuer: "Udemy", link: "https://www.udemy.com/certificate/UC-ad31d431-9575-4b97-b682-3d35f245da79/", logo: "https://about.udemy.com/wp-content/themes/wp-about-v4/assets/images/udemy-logo.svg" },
    { title: "DBMS", issuer: "CodeChef", link: "https://www.codechef.com/certificates/public/e1e9362", logo: "https://cdn.dribbble.com/userupload/20103349/file/original-a0411030f26482dcee9298419bf8d1c6.png" },
    { title: "Design and Analysis of Algorithms", issuer: "CodeChef", link: "https://www.codechef.com/certificates/public/8e1cdb1", logo: "https://cdn.dribbble.com/userupload/20103349/file/original-a0411030f26482dcee9298419bf8d1c6.png" },
    { title: "AI Fundamentals", issuer: "IBM", link: "https://www.credly.com/badges/f5e96a9d-8195-4d90-9d42-3cace69aa36e/", logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg" },
    { title: "SQL", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/8d25150f26be", logo: "https://hrcdn.net/fcore/assets/brand/logo-new-white-green-a5cb16e0ae.svg" },
    { title: "TalentNext - Java Full Stack", issuer: "Wipro", link: "https://drive.google.com/file/d/1ZSLP9VqwsykkjAk4KfMJs12EewZukERJ/view?usp=sharing", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/960px-Wipro_Primary_Logo_Color_RGB.svg.png" },
];

export const PUBLICATIONS = [
    {
        title: "Asynchronous event driven brain teaser using node.js",
        conference: "IEEE",
        link: "https://ieeexplore.ieee.org/document/10689905",
        description: "Published paper on a quiz app using real-time news with fact-checking.",
    },
    {
        title: "Deep Learning Driven Multi-Crop Disease Detection",
        conference: "IEEE PUNECON 2025",
        link: "https://drive.google.com/file/d/1w53f96aVHCpFk6kCHDZn6W-85SPo_b3D/view?usp=sharing",
        description: "Multilingual Audio Feedback Using Google Cloud Services.",
    },
    {
        title: "Real-Time AI-Driven Voice Interview Simulation",
        conference: "DSISys 2025",
        link: "https://drive.google.com/file/d/1SV_KpJdZAWQHcGiadyhzUWIvTLSRqOSl/view?usp=sharing",
        description: "Automated Performance Analysis Using VapiAI and OpenAI.",
    },
];

export const AWARDS = [
    {
        title: "Postman API Innovation Challenge - Runner Up",
        issuer: "MLSC Kare",
        description: "Secured 3rd place. Developed 'Spotify Songs Recommendation System' using Spotify API.",
        logo: "https://hackxcelerate2k25.netlify.app/mlsckare_logo.jpeg",
    },
    {
        title: "Wall of Winners",
        issuer: "Coding Blocks Kare",
        description: "Recognized for outstanding problem-solving skills in LinkedIn Challenge.",
        logo: "https://cb3img.s3.ap-south-1.amazonaws.com/img/cblogo.webp",
    },
];
