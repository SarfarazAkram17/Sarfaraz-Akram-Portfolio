import taskwave from "./assets/taskwave.png";
import profast from "./assets/profast.png";
import studify from "./assets/studify.png";

const projectData = [
  {
    name: "profast",
    title: "ProFast – Parcel Delivery System (FullStack)",
    desc: "ProFast is a complete logistics management platform that enables users to create parcels, track delivery statuses, and handle payments, with dedicated dashboards for Admins, Riders, and Customers.",
    techs: [
      "Tailwind CSS",
      "React.js",
      "Tanstack Query",
      "Express.js",
      "Stripe",
      "MongoDB",
      "Firebase Backend Authentication",
      "Role Verification",
    ],
    features: [
      {
        icon: "📦",
        title: "Parcel Management",
        points: [
          "Create, edit, and delete parcel records",
          "Track delivery status in real-time",
        ],
      },
      {
        icon: "🧑‍💼",
        title: "Role-Based Access Control",
        points: [
          "Separate dashboards for Admin, Rider, and User",
          "Riders only view parcels assigned to them",
        ],
      },
      {
        icon: "💳",
        title: "Secure Payments",
        points: [
          "Stripe integration for credit/debit card payments",
          "Store and display payment history on a dedicated page",
        ],
      },
      {
        icon: "📊",
        title: "Analytics Dashboard",
        points: [
          "Visualize parcel stats with dynamic pie charts",
          "Admin overview of total revenue and parcel flow",
        ],
      },
      {
        icon: "⚙️",
        title: "Interactive Interface",
        points: [
          "Responsive UI with smooth animations",
          "Delivery cost auto-calculation while creating parcels",
        ],
      },
    ],
    image: profast,
    github: "https://github.com/SarfarazAkram17/Profast-Client",
    liveLink: "https://profast-sarfaraz-akram.netlify.app",
    aos: "fade-up-right",
    futurePlan:
      "Enhance dashboard interactivity, add parcel tracking, and implement advanced delivery logic with more condition checks.",
  },
  {
    name: "studify",
    title: "Studify – Group Study Platform (FullStack)",
    desc: "Studify is a collaborative academic platform where students can create assignments, submit work, and peer-review submissions with real-time scoring and feedback.",
    techs: [
      "React.js",
      "Firebase",
      "Express.js",
      "MongoDB",
      "Firebase Backend Authentication",
    ],
    features: [
      {
        icon: "📝",
        title: "Assignment Management",
        points: [
          "Create, update, and delete assignments with details",
          "Define title, description, marks, and deadlines",
        ],
      },
      {
        icon: "👥",
        title: "Peer Collaboration",
        points: [
          "Peer-to-peer marking and review system",
          "Interactive submission and evaluation flow",
        ],
      },
      {
        icon: "📈",
        title: "Submission & Grading",
        points: [
          "Upload completed assignments with file support",
          "Grades and feedback shown in user profile",
        ],
      },
      {
        icon: "🔥",
        title: "Secure Authentication",
        points: [
          "Firebase Auth for account creation and login",
          "User-specific data isolation and protection",
        ],
      },
      {
        icon: "🎨",
        title: "Modern UI/UX",
        points: [
          "Responsive layout with Tailwind CSS",
          "Minimalist and accessible user experience",
        ],
      },
    ],
    image: studify,
    github: "https://github.com/SarfarazAkram17/Studify-Client",
    liveLink: "https://assignment-11-sarfaraz-akram.netlify.app",
    aos: "fade-up",
    futurePlan:
      "Improve dashboard interactivity, enhance visual design, and build a more comprehensive footer with essential links.",
  },
  {
    name: "taskwave",
    title: "TaskWave – Freelancing Platform for Micro Tasks (FullStack)",
    desc: "TaskWave is a modern freelance platform for short-term tasks where employers post jobs, and freelancers bid and complete them through a clean dashboard experience.",
    techs: ["Tailwind CSS", "React.js", "Express.js", "MongoDB", "Firebase"],
    features: [
      {
        icon: "🧰",
        title: "Task Lifecycle",
        points: [
          "Post, update, and delete freelance tasks",
          "Includes budget, timeline, and category support",
        ],
      },
      {
        icon: "🔍",
        title: "Smart Bidding System",
        points: [
          "Freelancers submit proposals with custom messages",
          "Employers can browse and accept relevant bids",
        ],
      },
      {
        icon: "📄",
        title: "Freelancer Tools",
        points: [
          "Manage bids and track assigned tasks",
          "Submit final deliverables for employer review",
        ],
      },
      {
        icon: "🚀",
        title: "Employer Features",
        points: [
          "View all bids per task in a clean table",
          "Filter and choose freelancers based on quality",
        ],
      },
      {
        icon: "🎯",
        title: "Refined User Interface",
        points: [
          "Polished layout using Tailwind CSS",
          "Hover animations, clean spacing, and responsive design",
        ],
      },
    ],
    image: taskwave,
    github: "https://github.com/SarfarazAkram17/Taskwave-Client",
    liveLink: "https://assignment-10-sarfaraz-akram.netlify.app",
    aos: "fade-up-left",
    futurePlan:
      "Enhance dashboard experience, refine UI/UX further, and introduce advanced filtering and task-tracking tools.",
  },
];

export default projectData;
