import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const services = [
    {
      title: "AI AUTOMATION",
      subtitle: "Smart Systems",
      description:
        "I build automated workflows that reduce workload, increase output, and improve consistency.",
      tags: [
        "Lead generation",
        "CRM automation",
        "Content production",
        "AI-powered chat",
        "Real estate media",
        "Business workflow",
      ],
    },
    {
      title: "DESIGN",
      subtitle: "Creative & Branding",
      description: "Strong visual identity that builds trust and recognition.",
      tags: [
        "Brand identity",
        "Packaging",
        "Label design",
        "Islamic educational",
        "UI/UX",
        "Content templates",
      ],
    },
    {
      title: "MEDIA",
      subtitle: "AI Video Production",
      description:
        "Modern, fast, high-quality media creation using AI and advanced editing workflows.",
      tags: [
        "Video editing",
        "AI video ads",
        "Social media reels",
        "Real estate video",
        "Motion graphics",
        "Storyboard",
      ],
    },
    {
      title: "DEVELOP",
      subtitle: "Web & App",
      description: "I craft clean, user-friendly digital experiences.",
      tags: [
        "Web app",
        "No-code/low-code",
        "Vibe coding",
        "Landing pages",
        "Interactive components",
        "AI-integrated",
      ],
    },
    {
      title: "MARKETING",
      subtitle: "Digital Growth",
      description:
        "I help brands grow with the right content, systems, and strategy.",
      tags: [
        "Social media",
        "Content calendars",
        "Instagram + TikTok",
        "YouTube pipelines",
        "Paid ads",
        "Brand positioning",
      ],
    },
  ];

  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>

          {services.map((service, index) => (
            <div
              className="what-content what-noTouch"
              ref={(el) => setRef(el, index)}
              key={index}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="0"
                    x2="100%"
                    y2="0"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              <div className="what-corner"></div>

              <div className="what-content-in">
                <h3>{service.title}</h3>
                <h4>{service.subtitle}</h4>
                <p>{service.description}</p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  {service.tags.map((tag, i) => (
                    <div className="what-tags" key={i}>
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="what-arrow"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
