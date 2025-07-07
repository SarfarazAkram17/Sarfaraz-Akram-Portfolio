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
          "Send Parcels and delete parcel records",
          // "Track delivery status in real-time",
        ],
      },
      {
        icon: "🧑‍💼",
        title: "Role-Based Access Control",
        points: [
          "Separate dashboards for Admin, Rider, and User",
          "Only admin can assign rider to a parcel etc.",
          "Riders only view parcels assigned to them etc.",
          "Users can see their sended parcels etc.",
        ],
      },
      {
        icon: "💳",
        title: "Secure Payments",
        points: [
          "Stripe integration for card payments",
          "Store and display payment history on a dedicated page",
        ],
      },
      {
        icon: "📊",
        title: "Analytics Dashboard",
        points: ["Visualize parcel stats with dynamic pie charts"],
      },
      {
        icon: "⚙️",
        title: "Interactive Interface",
        points: [
          "Responsive UI with smooth animations",
          "Delivery cost auto-calculation while sending parcels",
        ],
      },
    ],
    status: "Not fully Complete",
    image: profast,
    github: "https://github.com/SarfarazAkram17/Profast-Client",
    liveLink: "https://profast-sarfaraz-akram.netlify.app",
    aos: "fade-up-right",
    futurePlan:
      "Make rider and user dashboard and tracking feature implement and more better delivery login and condition checks",
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
          "Create, update, and delete assignments with detailed information",
          "Set titles, descriptions, marks, and deadlines",
        ],
      },
      {
        icon: "👥",
        title: "Peer Collaboration",
        points: [
          "Peer-to-peer marking and review system",
          "Interactive submission and evaluation workflow",
        ],
      },
      {
        icon: "📈",
        title: "Submission & Grading",
        points: [
          "Upload completed assignments with file support",
          "Grades and feedback displayed in user profiles",
        ],
      },
      {
        icon: "🔥",
        title: "Secure Authentication",
        points: [
          "Firebase Authentication for account creation and login",
          "User-specific data isolation and protection",
        ],
      },
      {
        icon: "🎨",
        title: "Modern UI/UX",
        points: [
          "Responsive layout built with Tailwind CSS and DaisyUI",
          "Minimalist and accessible user experience",
        ],
      },
    ],
    status: "Completed",
    image: studify,
    github: "https://github.com/SarfarazAkram17/Studify-Client",
    liveLink: "https://assignment-11-sarfaraz-akram.netlify.app",
    aos: "fade-up",
    futurePlan:
      "Implement dashboard and improve UI/UX design.",
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
          "Includes budget, deadline, and category support",
        ],
      },
      {
        icon: "🔍",
        title: "Smart Bidding System",
        points: ["Freelancers bid for tasks easily"],
      },
      {
        icon: "🚀",
        title: "Employer Features",
        points: ["View all bids per task in a clean table"],
      },
      {
        icon: "🎯",
        title: "Refined User Interface",
        points: [
          "Polished layout and fully responsive design using Tailwind CSS and DaisyUI",
        ],
      },
    ],
    status: "Completed",
    image: taskwave,
    github: "https://github.com/SarfarazAkram17/Taskwave-Client",
    liveLink: "https://assignment-10-sarfaraz-akram.netlify.app",
    aos: "fade-up-left",
    futurePlan:
      "Implement dashboard, improve UI/UX design, and implement fully functional footer navigation.",
  },
];

export default projectData;
