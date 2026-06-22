import {
  FaRocket,
  FaMobileAlt,
  FaShieldAlt,
  FaCloud,
  FaCode,
  FaDatabase,
  FaServer,
  FaLaptopCode,
  FaCogs,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
// const clients = [
//   "/clients/c1.png",
//   "/clients/c2.png",
//   "/clients/c3.png",
//   "/clients/c4.png",
//   "/clients/c5.png",
//    "/clients/c6.png",

// ];
import WhatsAppButton from "../component/WhatsAppButton";
import Footer from "../component/Footer";
const clients = [
  "https://cdn.worldvectorlogo.com/logos/react-2.svg",
  "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  "https://cdn.worldvectorlogo.com/logos/next-js.svg",
  "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  "https://cdn.worldvectorlogo.com/logos/docker.svg",
  "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  "https://cdn.worldvectorlogo.com/logos/firebase-1.svg",
  "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
];

export default function Home() {
  return (
    <>
      {/* HERO IMAGE SECTION */}
      <section className="hero">
        <div className="bg"></div>
        <div className="overlay"></div>

        {/* Animated Main Text */}
        <div className="hero-center">
          <h1 className="typewriter">
            Build Scalable Digital Products for Your Business
          </h1>
        </div>
      </section>

      {/* CENTER TEXT SECTION */}
      <section className="intro-section">
        <div className="container text-center">
          <p className="intro-text">
            We design & develop websites, mobile apps, APIs and cloud systems
            for modern businesses.
          </p>
        </div>
      </section>

      {/* SERVICES / FEATURES SECTION */}
      <section className="features-section">
        <div className="container">
          <div className="feature-grid">
            <div className="feature-card">
              <FaRocket className="icon" />
              <h3>Fast Delivery</h3>
              <p>
                We deliver high-quality projects in record time with optimized
                workflow.
              </p>
            </div>

            <div className="feature-card">
              <FaMobileAlt className="icon" />
              <h3>Mobile Friendly</h3>
              <p>Fully responsive UI that works perfectly on all devices.</p>
            </div>

            <div className="feature-card">
              <FaShieldAlt className="icon" />
              <h3>Secure Architecture</h3>
              <p>Enterprise-level security with best coding practices.</p>
            </div>

            <div className="feature-card">
              <FaCloud className="icon" />
              <h3>Scalable Systems</h3>
              <p>
                Cloud-ready architecture designed to grow with your business.
              </p>
            </div>

            <div className="feature-card">
              <FaLaptopCode className="icon" />
              <h3>Web Development</h3>
              <p>Modern web apps using React, Bootstrap & Next.js.</p>
            </div>

            <div className="feature-card">
              <FaMobileAlt className="icon" />
              <h3>Mobile Apps</h3>
              <p>Android & iOS apps with smooth performance and UI.</p>
            </div>

            <div className="feature-card">
              <FaServer className="icon" />
              <h3>REST APIs</h3>
              <p>Fast and scalable backend APIs for all systems.</p>
            </div>

            <div className="feature-card">
              <FaDatabase className="icon" />
              <h3>Database Design</h3>
              <p>Optimized MongoDB & MySQL database architecture.</p>
            </div>

            <div className="feature-card">
              <FaCogs className="icon" />
              <h3>Cloud Deployment</h3>
              <p>CI/CD pipelines and cloud hosting setup.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENTS SECTION */}
      <section className="clients-section">
        <div className="container text-center">
          <h2 className="clients-title">Trusted by Businesses</h2>
          <p className="clients-subtitle">
            We help startups and companies build scalable digital products with
            modern technology.
          </p>

          {/* STATS */}
          <div className="stats">
            <div>
              <h3>50+</h3>
              <p>Happy Clients</p>
            </div>

            <div>
              <h3>120+</h3>
              <p>Projects Delivered</p>
            </div>

            <div>
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* LOGO CAROUSEL */}
      <section className="logo-carousel">
        <div className="container text-center">
          <h2 className="carousel-title">Our Clients</h2>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={25}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {clients.map((img, i) => (
              <SwiperSlide key={i}>
                <div className="logo-box">
                  <img src={img} alt="client logo" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Testimonial */}
      <section className="testimonials">
        <div className="container text-center">
          <h2>What Clients Say</h2>

          <div className="testimonial-grid">
            <div className="testimonial">
              <p>"They delivered our product 2x faster than expected."</p>
              <span>- Startup Founder</span>
            </div>
            <div className="testimonial">"Fast delivery"</div>
            <div className="testimonial">"Highly recommended"</div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="cta-section">
        <div className="container text-center">
          <h2>Have a project in mind?</h2>
          <p>Let’s build something amazing together</p>

          <button
            onClick={() =>
              window.open(
                "https://wa.me/917678603291?text=Hi, I want to build a digital product",
                "_blank",
              )
            }
            className="cta-btn"
          >
            <h2>Let’s build your next digital product</h2>
            <p>Get a free consultation within 24 hours</p>
          </button>
        </div>
      </section>
      <WhatsAppButton />
       <Footer />
    </>
  );
}
