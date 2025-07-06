import taskwave from "./assets/taskwave.png";
import profast from "./assets/profast.png";
import studify from "./assets/studify.png";

const projectData = [
  {
    id: "profast",
    title: "ProFast – Parcel Delivery System (FullStack)",
    desc: "ProFast is a logistics and parcel delivery management system for creating, assigning, and tracking deliveries with role-based...",
    extra: 'access for admins, riders, and users.',
    techs: [
      "Tailwind CSS",
      "React.js",
      "React Query",
      "Express.js",
      "Stripe",
      "MongoDB",
      "Firebase Backend Authentication",
      "Role Verification",
    ],
    image: profast,
    github: "https://github.com/SarfarazAkram17/Profast-Client",
    liveLink: "https://profast-sarfaraz-akram.netlify.app",
    aos: "fade-up-right",
  },
  {
    id: "studify",
    title: "Studify – Group Study Platform (FullStack)",
    desc: "Studify is a group study platform where students can create, update, and delete their own assignments. Others can...",
    extra: 'complete and submit assignments, and receive peer-reviewed marks.',
    techs: [
      "React.js",
      "Firebase",
      "express.js",
      "MongoDB",
      "Firebase Backend Authentication",
    ],
    image: studify,
    github: "https://github.com/SarfarazAkram17/Studify-Client",
    liveLink: "https://assignment-11-sarfaraz-akram.netlify.app",
    aos: "fade-up",
  },
  {
    id: "taskwave",
    title: "TaskWave – Freelancing Website for Small Tasks (FullStack)",
    desc: "TaskWave is a full-stack freelancing platform built with the MERN stack and Firebase Authentication. Users can...",
    extra:'create, update, and delete their own tasks. Freelancers can bid on tasks and get them assigned.',
    techs: [
      "Tailwind CSS",
      "React.js",
      "Express.js",
      "MongoDB",
      "Firebase",
    ],
    image: taskwave,
    github: "https://github.com/SarfarazAkram17/Taskwave-Client",
    liveLink: "https://assignment-10-sarfaraz-akram.netlify.app",
    aos: "fade-up-left",
  },
];

export default projectData;
