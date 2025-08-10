import React, { useState } from "react";
import { LuCodeXml } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";
import { FaMicrochip } from "react-icons/fa6";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Awards from "./Awards";
import TechStack from "./TechStack";

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const tabs = [
    { key: "projects", label: "Projects", icon: <LuCodeXml size={30} /> },
    {
      key: "certificates",
      label: "Certificates",
      icon: <PiCertificate size={30} />,
    },
    {
      key: "techStack",
      label: "Tech Stack",
      icon: <FaMicrochip size={30} />,
    },
    { key: "awards", label: "Awards", icon: <LiaMedalSolid size={30} /> },
  ];

  return (
    <div id="portfolio" className="pt-14 pb-6 mt-10 max-w-5xl mx-auto">
      <div data-aos="fade-up">
        <h1 className="text-3xl text-center sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-blue-400 via-cyan-600 to-green-600">
          Portfolio Showcase
        </h1>
        <div className="mt-3 mb-10 w-52 md:w-80 h-1 rounded-full mx-auto bg-gradient-to-l from-blue-400 via-cyan-600 to-green-600" />

        <div className="rounded-xl grid grid-cols-2 sm:grid-cols-4 p-4 gap-4 items-center bg-white/5">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`p-4 flex-col cursor-pointer transition-all duration-500 flex justify-center items-center rounded-xl font-bold ${
                activeTab === tab.key
                  ? "bg-white/40 text-white"
                  : "bg-white/15 text-white/60 hover:bg-white/25 hover:text-white"
              }`}
            >
              {tab.icon}
              <span className="mt-1 whitespace-nowrap">{tab.label}</span>
            </div>
          ))}
        </div>

        {activeTab === "projects" && <Projects></Projects>}
        {activeTab === "certificates" && <Certificates></Certificates>}
        {activeTab === "awards" && <Awards></Awards>}
        {activeTab === "techStack" && <TechStack></TechStack>}
      </div>
    </div>
  );
};

export default Showcase;
