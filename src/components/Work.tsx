import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      const padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: () => `+=${translateX}`, // Use function for dynamic calculation
        scrub: true,
        pin: true,
        id: "work",
        invalidateOnRefresh: true,
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>AI Video Ad Campaign</h4>
                  <p>Media & AI Automation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>AI Video Generation, Motion Graphics, Adobe Premiere, After Effects</p>
              <p style={{ marginTop: '1rem', opacity: 0.85, lineHeight: '1.6' }}>
                Created high-converting video advertisements using AI-powered tools and motion graphics.
                Streamlined production workflow to deliver professional-quality ads in half the traditional time,
                resulting in 3x higher engagement rates for clients across social media platforms.
              </p>
            </div>
            <WorkImage image="/images/project-01-ai-video.png" alt="AI Video Ad Campaign" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>Brand Identity System</h4>
                  <p>Design & Creative</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Branding, UI/UX Design, Visual Identity, Product Labels, Figma</p>
              <p style={{ marginTop: '1rem', opacity: 0.85, lineHeight: '1.6' }}>
                Developed comprehensive brand identity systems for startups and established businesses.
                Crafted cohesive visual languages including logos, color palettes, typography, and product
                packaging that elevated brand perception and increased customer recognition by 60%.
              </p>
            </div>
            <WorkImage image="/images/project-02-branding.png" alt="Brand Identity System" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Real Estate Media Suite</h4>
                  <p>Video Production</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Property Videography, Drone Footage, 3D Tours, Video Editing</p>
              <p style={{ marginTop: '1rem', opacity: 0.85, lineHeight: '1.6' }}>
                Produced cinematic property showcases combining drone aerials, interior walkthroughs, and
                immersive 3D tours. Helped real estate agents close deals 40% faster by providing potential
                buyers with comprehensive virtual experiences before in-person viewings.
              </p>
            </div>
            <WorkImage image="/images/project-03-realestate.png" alt="Real Estate Media Suite" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Business Automation Hub</h4>
                  <p>AI & Automation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Workflow Automation, AI Chatbot Integration, Content Pipelines, Zapier</p>
              <p style={{ marginTop: '1rem', opacity: 0.85, lineHeight: '1.6' }}>
                Built intelligent automation systems that eliminated repetitive tasks and streamlined business
                operations. Integrated AI chatbots for customer service, automated content distribution pipelines,
                and connected multiple platforms to save businesses 20+ hours per week.
              </p>
            </div>
            <WorkImage image="/images/project-04-automation.png" alt="Business Automation Hub" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>Interactive Portfolio Web App</h4>
                  <p>Web Development</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>React, TypeScript, Three.js, GSAP Animations, Responsive Design</p>
              <p style={{ marginTop: '1rem', opacity: 0.85, lineHeight: '1.6' }}>
                Designed and developed immersive portfolio experiences featuring 3D elements, smooth scroll
                animations, and responsive layouts. Combined modern web technologies to create memorable
                digital showcases that helped clients stand out and land premium opportunities.
              </p>
            </div>
            <WorkImage image="/images/project-05-portfolio.png" alt="Interactive Portfolio Web App" />
          </div>

          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>Social Growth System</h4>
                  <p>Digital Marketing</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Social Media Strategy, Content Systems, Funnel Design, Analytics</p>
              <p style={{ marginTop: '1rem', opacity: 0.85, lineHeight: '1.6' }}>
                Created data-driven social media growth strategies and conversion funnels that consistently
                delivered results. Developed content systems and analytics frameworks that helped brands
                achieve 5x follower growth and 10x engagement within 6 months.
              </p>
            </div>
            <WorkImage image="/images/project-06-social.png" alt="Social Growth System" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
