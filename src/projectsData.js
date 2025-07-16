import taskwave from "./assets/taskwave.png";
import tournest from "./assets/tournest.png";
import studify from "./assets/studify.png";

const projectData = [
  {
    name: "tournest",
    title: "TourNest – Tourism Management System (FullStack)",
    desc: "TourNest is a complete tourism management platform that allows users to book tour packages, apply as tour guides, share stories, and make secure payments, all under a role-based access-controlled environment.",
    techs: [
      "React.js",
      "Tailwind CSS",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "Stripe",
      "TanStack Query",
      "React Hook Form",
      "React Share",
    ],
    features: [
      {
        icon: "🌍",
        title: "Tour Package Booking",
        points: [
          "Explore tour packages in all trips page",
          "Book tours with Stripe payment integration",
          "Prevent duplicate unpaid bookings",
        ],
      },
      {
        icon: "🧑‍💼",
        title: "Role-Based Dashboards",
        points: [
          "Separate dashboards for Admin, Tourist, and Tour Guide",
          "Tour Guides can view assigned tours",
          "Admins can approve guide applications, manage users and packages",
        ],
      },
      {
        icon: "📖",
        title: "Story Sharing System",
        points: [
          "All users can create, edit, and delete travel stories",
          "Random stories and community page with facebook share button",
          "Image uploading via Cloudinary",
        ],
      },
      {
        icon: "🧾",
        title: "Guide Applications & Approval",
        points: [
          "Tourists can apply to become tour guides",
          "Admin can approve/reject applications",
        ],
      },
      {
        icon: "📊",
        title: "Admin Analytics",
        points: [
          "Admin can see stats like total payments, users, tour guides, packages, stories in his dashboard",
          "Dynamic data from MongoDB queries",
        ],
      },
      {
        icon: "🎯",
        title: "Modern UX/UI",
        points: [
          "Fully responsive layout using Tailwind and DaisyUI",
          "Animations using Framer Motion",
          "Smart forms with validation and feedback",
        ],
      },
    ],
    status: "Completed",
    image: tournest,
    github: "https://github.com/SarfarazAkram17/TourNest-Client",
    liveLink: "https://tournest-sarfaraz-akram.netlify.app",
    aos: "fade-up-right",
    futurePlan:
      "Make notification system to notify all users when a tour package is created.",
  },
  {
    name: "studify",
    title: "Studify – Group Study Platform (FullStack)",
    desc: "Studify is a group study platform where students can create assignments, submit work, and peer-review submissions with scoring and feedback.",
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
    futurePlan: "Implement dashboard and improve UI/UX design.",
  },
  {
    name: "taskwave",
    title: "TaskWave – Freelancing Platform for Micro Tasks (FullStack)",
    desc: "TaskWave is a modern freelance platform for small tasks where employers post jobs, and freelancers bid for them.",
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
