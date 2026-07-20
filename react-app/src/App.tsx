import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import About from "./components/About";
import Services from "./components/Services";
import Counter from "./components/Counter";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

function App() {
  useEffect(() => {
    // Typed text slider
    let typed: any;
    if (window.Typed) {
      const el = document.querySelector(".text-slider");
      const items = document.querySelector(".text-slider-items")?.textContent;
      if (el && items) {
        typed = new window.Typed(".text-slider", {
          strings: items.split(",").map((s) => s.trim()),
          typeSpeed: 80,
          loop: true,
          backSpeed: 30,
          backDelay: 2000,
        });
      }
    }

    // Smooth scroll for nav links
    const handleNavClick = (e: Event) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        const el = document.querySelector(href);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    };
    const links = document.querySelectorAll(".js-scroll");
    links.forEach((link) => link.addEventListener("click", handleNavClick));

    // Navbar background on scroll
    const handleScroll = () => {
      const nav = document.getElementById("mainNav");
      if (!nav) return;
      if (window.scrollY > 100) {
        nav.classList.add("navbar-scrolled");
      } else {
        nav.classList.remove("navbar-scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);

    // Remove preloader
    const preloader = document.getElementById("preloader");
    if (preloader) preloader.style.display = "none";

    return () => {
      typed?.destroy();
      links.forEach((link) => link.removeEventListener("click", handleNavClick));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="page-top">
      <Navbar />
      <Intro />
      <About />
      <Services />
      <Counter />
      <Portfolio />
      <Blog />
      <Contact />
      <BackToTop />
      <div id="preloader"></div>
    </div>
  );
}

export default App;
