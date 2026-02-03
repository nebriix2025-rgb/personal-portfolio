import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Creative Developer & Designer</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              Launched my freelance career focusing on web development and UI/UX design.
              Built interactive web applications using React and Three.js, created brand
              identity systems for startups, and developed product labels for local businesses.
              Mastered modern front-end technologies and design principles.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing & Media Specialist</h4>
                <h5>Various Clients</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Expanded into digital marketing and video production. Developed social media
              growth strategies, designed marketing funnels, and created AI-powered video
              ad campaigns. Specialized in real estate media production including drone
              footage and 3D property tours. Helped brands increase their online presence
              and conversion rates.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Growth Catalyst & Automation Expert</h4>
                <h5>Independent Consultant</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Currently helping brands sell more and add value through comprehensive digital
              solutions. Combining design, development, AI automation, and marketing expertise
              to create end-to-end growth systems. Building AI workflow designs, chatbot
              integrations, and content pipelines that streamline business operations and
              drive measurable results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
