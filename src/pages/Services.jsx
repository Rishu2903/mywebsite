import Footer from "../component/Footer";
import WhatsAppButton from "../component/WhatsAppButton";
import serviceVideo from "../assets/videos/service.mp4";
import webapplication from "../assets/services/WebDevelopment.jpg"
import mobiledev from "../assets/services/Mobile.jpg"
import backend from "../assets/services/Backend.jpg"
import database from "../assets/services/Database.jpg"
import clouddev from "../assets/services/cloud.jpg"
import uiux from "../assets/services/UIUX.jpg"
export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="service-hero">
        <video autoPlay muted loop playsInline className="bg-video">
          <source src={serviceVideo} type="video/mp4" />
        </video>

        <div className="video-overlay"></div>

        <div className="hero-center service-content">
          <h1 className="typewriter">Our Services</h1>
          <p className="intro-text">
            We build scalable digital products including websites, mobile apps,
            APIs, and cloud systems for modern businesses.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="services-page">
        {/* ================= INTRO ================= */}
        <div className="services-intro">
          <h2>Describe Our Services</h2>

          <p>
            We help businesses transform ideas into powerful digital products.
            From design to development and deployment, we build scalable,
            secure, and high-performance solutions tailored for modern needs.
          </p>

          <ul>
            <li>
              ✔ High-performance web applications built for speed and
              scalability
            </li>
            <li>✔ Mobile apps designed for smooth user experience</li>
            <li>✔ Secure backend systems and APIs</li>
            <li>✔ Cloud-ready architecture with modern DevOps practices</li>
          </ul>
        </div>

        {/* ================= WEB DEV ================= */}
        <div className="service-row">
          <div className="service-media">
            <img src={webapplication} alt="Web Development" />
          </div>

          <div className="service-text">
            <h3>Web Development</h3>
            <p>
              We build modern, responsive, and high-performance websites using
              React, Next.js, and modern frontend technologies. Every website is
              optimized for speed, SEO, and scalability.
            </p>
          </div>
        </div>

        {/* ================= MOBILE APP ================= */}
        <div className="service-row reverse">
          <div className="service-media">
            <img src={mobiledev} alt="Mobile Apps" />
          </div>

          <div className="service-text">
            <h3>Mobile App Development</h3>
            <p>
              We design and develop powerful mobile applications for Android and
              iOS with smooth UI/UX, high performance, and secure backend
              integration.
            </p>
          </div>
        </div>

        {/* ================= BACKEND ================= */}
        <div className="service-row">
          <div className="service-media">
            <img src={backend} alt="Backend APIs" />
          </div>

          <div className="service-text">
            <h3>Backend & API Development</h3>
            <p>
              We create secure and scalable backend systems with REST APIs,
              authentication, and optimized database architecture for high
              performance applications.
            </p>
          </div>
        </div>

        {/* ================= DATABASE ================= */}
        <div className="service-row reverse">
          <div className="service-media">
            <img src={database} alt="Database Design" />
          </div>

          <div className="service-text">
            <h3>Database Design</h3>
            <p>
              We design optimized SQL and NoSQL databases ensuring fast queries,
              secure data handling, and scalable architecture for future growth.
            </p>
          </div>
        </div>

        {/* ================= CLOUD ================= */}
        <div className="service-row">
          <div className="service-media">
            <img src={clouddev} alt="Cloud Deployment" />
          </div>

          <div className="service-text">
            <h3>Cloud & Deployment</h3>
            <p>
              We deploy applications on AWS and modern cloud platforms with
              CI/CD pipelines, Docker containers, and automated workflows for
              high availability.
            </p>
          </div>
        </div>

        {/* ================= UI UX ================= */}
        <div className="service-row reverse">
          <div className="service-media">
            <img src={uiux} alt="UI UX Design" />
          </div>

          <div className="service-text">
            <h3>UI/UX Design</h3>
            <p>
              We design clean, modern, and conversion-focused interfaces that
              improve user engagement and deliver better business results.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="intro-section">
        <div className="container text-center">
          <h2>How We Work</h2>
          <p className="intro-text">
            1. Requirement Analysis → 2. UI/UX Design → 3. Development → 4.
            Testing → 5. Deployment
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Need a Custom Solution?</h2>
          <p>Let’s discuss your project and build something powerful.</p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/917678603291?text=Hi, I need services for my project",
                "_blank",
              )
            }
            className="cta-btn"
          >
            Contact Us on WhatsApp
          </button>
        </div>
      </section>
      <WhatsAppButton />
      <Footer />
    </>
  );
}
