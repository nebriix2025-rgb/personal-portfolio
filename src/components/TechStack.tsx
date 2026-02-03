// 3D physics code removed as it was unused and causing build errors


import "./styles/TechStack.css";

const TechStack = () => {
  const skills = [
    {
      category: "Design & Creative",
      items: ["Branding", "UI/UX", "Product labels", "Visual identity systems"],
    },
    {
      category: "Media & Video",
      items: [
        "Video editing",
        "AI video ads",
        "Motion graphics",
        "Real estate media",
      ],
    },
    {
      category: "AI & Automation",
      items: [
        "AI workflow design",
        "Business automation",
        "Chatbot logic",
        "Content pipelines",
      ],
    },
    {
      category: "Development",
      items: [
        "Web app development",
        "Vibe coding",
        "Front-end components",
        "No-code systems",
      ],
    },
    {
      category: "Marketing",
      items: [
        "Social media marketing",
        "Digital growth strategy",
        "Funnel design",
        "Content systems",
      ],
    },
  ];

  return (
    <div className="techstack">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <ul className="skill-list">
              {skillGroup.items.map((item, i) => (
                <li key={i} className="skill-item">
                  <span className="skill-dot"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
