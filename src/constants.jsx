// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import renderLogo from './assets/tech_logo/render.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
// import postgreLogo from './assets/tech_logo/postgre.png';
// import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import expLogo from './assets/company_logo/explogo.jpeg';
// import agcLogo from './assets/company_logo/agc_logo.png';
// import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// Education Section Logo's

import sgaLogo from './assets/education_logo/sgalogo.jpg';
import dsuLogo from './assets/education_logo/dsulogo.png';

// Project Section Logo's
import aipoweredLogo from './assets/work_logo/aipowered.png';
import simonsaysLogo from './assets/work_logo/simonsays.png';
import salesDashboardLogo from './assets/work_logo/salesdashboard.png';
import todolistLogo from './assets/work_logo/todolist.png';
import leetcodeLogo from './assets/work_logo/leetcode.jpeg';
import ecommLogo from './assets/work_logo/ecomm.png';


 // Certificate Section Logo's
import csaLogo from './assets/certificate_logo/csa.png';
import cadLogo from './assets/certificate_logo/cad.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
      // { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      {name:'Render', logo:renderLogo},
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: expLogo,
      role: "Web Developer Intern",
      company: "Tech Octanet Services Pvt Ltd",
      date: "July 2024 - Aug 2024",
      desc:"Developed a responsive To-Do-List web app for task creation, deletion, and completion tracking.Developed various projects and web solutions using HTML, CSS, and JavaScript",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        ,
      ],
    },
   
   
  ];
  
  export const education = [
    {
      id: 0,
      img: dsuLogo,
      school: "Dayananda Sagar University, Bengaluru",
      date: "Aug 2022 - Present",
      grade: "8.53 CGPA",
      desc: "I am persuing my B.Tech in Computer Science and Engineering from DSU, Bengaluru. During my education at DSU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at DSU has been instrumental in shaping my technical abilities and professional growth.",
      degree: "B.Tech - CSE",
    },
    {
      id: 1,
      img: sgaLogo,
      school: "Suryodaya Global Academy, Harda",
      date: "July 2021 - July 2022",
      grade: "74%",
      desc: "I completed my higher secondary education from Suryodaya Global Academy, Harda, under the CBSE board, where I studied Physics, Chemistry, Mathematics, English and Physical Education. ",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: sgaLogo,
      school: "Suryodaya Global Academy, Harda",
      date: "July 2019 - July 2020",
      grade: "72%",
      desc: "I completed my secondary education from Suryodaya Global Academy, Harda, under the CBSE board, where I studied Mathematics, Science, Social Science, English and Hindi. ",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Al-Powered Video Platform",
      description:
        "Full Stack Website for multilingual video viewing with AI transcription and translation using AssemblyAI, FFmpeg, and Cloudinary with an admin dashboard. ",
      image: aipoweredLogo,
      tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "AssemblyAI", "FFmpeg", "Cloudinary", "API"],
      github: "https://github.com/Madhusudan-Gurjar/AI-powered-video-platform.git",
      webapp: "https://ai-powered-video-platform.netlify.app/",
    },
    {
      id: 1,
      title: "E-Comm-Dashboard",
      description:
        "Built a full-stack MERN e-commerce dashboard with user authentication, product management, and secure API access using JWT.",
      image: ecommLogo,
      tags: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "JWT"],
      github: "https://github.com/Madhusudan-Gurjar/E-Comm-Dashboard.git",
      webapp: " ",
    },
    {
      id: 2,
      title: "Simon-says-game",
      description:
        "A simple Simon Says game built using HTML, CSS, and JavaScript.",
      image: simonsaysLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Madhusudan-Gurjar/Simon-says-game.git",
      webapp: "https://madhusudan-gurjar.github.io/Simon-says-game/",
    },
    {
      id: 3,
      title: "Sales-Dashboard",
      description:
        "A modern, responsive Sales Dashboard built with Next.js, TypeScript, Tailwind CSS, and Recharts. It visualizes sales data by year, chart type, and sales threshold, with a clean, mobile-friendly design.",
      image: salesDashboardLogo,
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts (chart rendering)"],
      github: "https://github.com/Madhusudan-Gurjar/sales-dashboard.git",
      webapp: "https://sales-dashboard-nine-delta.vercel.app/",
    },
    {
      id: 4,
      title: "To-Do-List",
      description:
        "Developed a responsive To-Do-List web app for task creation, deletion, and completion tracking.",
      image: todolistLogo,
      tags: [ "HTML", "CSS", "JavaScript"],
      github: "https://github.com/Madhusudan-Gurjar/Octanet-Internship-Task2-To-Do-List.git",
      webapp: "https://madhustodolist.netlify.app/",
    },
    {
      id: 5,
      title: "LeetCode Questions",
      description:
        "Questions solved in LeetCode",
      image: leetcodeLogo,
      tags: ["Java"],
      github: "https://github.com/Madhusudan-Gurjar/LeetCode.git",
      webapp: "https://leetcode.com/Madhusudan-Gurjar",
    },
  ];
 

export const certificates = [
  {
    id: 0,
    title: "ServiceNow Certified System Administrator (CSA)",
    image: csaLogo,
    link: "https://drive.google.com/file/d/18eT2_JzYbW9PSe62_yS5yCztQR6h45v9/view?usp=sharing",
  },
  {
    id: 1,
    title: "ServiceNow Certified Application Developer (CAD)",
    image: cadLogo,
    link: "https://drive.google.com/file/d/19SA76mEmb3Ex-oYM1Gio2xXS2o7e46TT/view?usp=sharing",
  },
];