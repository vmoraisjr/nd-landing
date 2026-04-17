import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Ecosystem from "./components/Ecosystem";
import SocialProof from "./components/SocialProof";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Ecosystem />
      <SocialProof />
      <Contact />
      <Footer />

      <div className="whatsapp-container">
        <div className="whatsapp-tooltip">
          <span className="status"></span>
          Estamos online agora
        </div>

        <a
          href="https://wa.me/5513982081909?text=Ol%C3%A1,%20vim%20pela%20landing%20e%20quero%20entender%20como%20aumentar%20meu%20faturamento"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            width="28"
            height="28"
          >
            <path
              fill="white"
              d="M19.11 17.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.5.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.51h-.56c-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.5 1.7.64.71.23 1.36.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
            />
          </svg>
        </a>
      </div>
    </>
  );
}

export default App;
