import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import { LuCodeXml } from "react-icons/lu";
import { PiCertificate } from "react-icons/pi";
import { LiaMedalSolid } from "react-icons/lia";
import { FaMicrochip } from "react-icons/fa6";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Awards from "./Awards";
import TechStack from "./TechStack";

const tabs = [
  { key: "projects", label: "Projects", icon: <LuCodeXml aria-hidden="true" /> },
  {
    key: "certificates",
    label: "Certificates",
    icon: <PiCertificate aria-hidden="true" />,
  },
  { key: "techStack", label: "Tech stack", icon: <FaMicrochip aria-hidden="true" /> },
  { key: "awards", label: "Awards", icon: <LiaMedalSolid aria-hidden="true" /> },
];

const Showcase = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const tabRefs = useRef([]);

  useEffect(() => {
    const selectTab = (event) => {
      if (tabs.some((tab) => tab.key === event.detail)) setActiveTab(event.detail);
    };
    window.addEventListener("portfolio-tab", selectTab);
    return () => window.removeEventListener("portfolio-tab", selectTab);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => AOS.refreshHard());
    return () => window.cancelAnimationFrame(frame);
  }, [activeTab]);

  const panel = {
    projects: <Projects />,
    certificates: <Certificates />,
    techStack: <TechStack />,
    awards: <Awards />,
  }[activeTab];

  const handleTabKeyDown = (event, index) => {
    let nextIndex;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;
    if (nextIndex === undefined) return;
    event.preventDefault();
    setActiveTab(tabs[nextIndex].key);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      className="section-block showcase-section section-wrap"
      id="portfolio"
      aria-labelledby="portfolio-title"
    >
      <div className="section-heading showcase-head" data-aos="fade-up">
        <div>
          <div className="section-kicker">Selected work &amp; learning</div>
          <h2 className="section-title" id="portfolio-title">Made to be useful.</h2>
        </div>
        <p className="section-description">
          Real projects, the tools behind them, and a few milestones from the
          learning journey. Each one started with a problem worth solving.
        </p>
      </div>

      <div className="showcase-tabs" role="tablist" aria-label="Portfolio content">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            ref={(element) => { tabRefs.current[index] = element; }}
            type="button"
            role="tab"
            id={`tab-${tab.key}`}
            aria-controls="portfolio-panel"
            aria-selected={activeTab === tab.key}
            tabIndex={activeTab === tab.key ? 0 : -1}
            className="showcase-tab"
            onClick={() => setActiveTab(tab.key)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div
        id="portfolio-panel"
        className="showcase-panel"
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
        tabIndex={0}
      >
        {panel}
      </div>
    </section>
  );
};

export default Showcase;
