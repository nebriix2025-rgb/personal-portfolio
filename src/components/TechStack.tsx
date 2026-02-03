// 3D physics code removed as it was unused and causing build errors


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
    <div className="techstack" style={{ height: "auto", minHeight: "100vh" }}>
      <h2>Skills</h2>
      <div
        className="skills-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
          padding: "2rem",
          marginTop: "150px",
          maxWidth: "1400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {skills.map((skillGroup, index) => (
          <div
            key={index}
            className="skill-category"
            style={{
              background: "rgba(255,255,255,0.05)",
              padding: "2rem",
              borderRadius: "16px",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1.5rem",
                color: "var(--accentColor)",
                textTransform: "uppercase",
                letterSpacing: "1px",
              }}
            >
              {skillGroup.category}
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "flex",
                flexDirection: "column",
                gap: "0.8rem",
              }}
            >
              {skillGroup.items.map((item, i) => (
                <li
                  key={i}
                  style={{
                    fontSize: "1.1rem",
                    opacity: 0.8,
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "var(--accentColor)",
                      borderRadius: "50%",
                      display: "inline-block",
                    }}
                  ></span>
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
