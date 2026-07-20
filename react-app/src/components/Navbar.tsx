import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "#home", key: "nav_home" as const, active: true },
    { href: "#about", key: "nav_about" as const },
    { href: "#service", key: "nav_service" as const },
    { href: "#work", key: "nav_work" as const },
    { href: "#contact", key: "nav_contact" as const },
  ];

  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll" href="#page-top">
          Portfolio
        </a>

        <div className="lang-switch">
          <button
            type="button"
            className={lang === "az" ? "active" : ""}
            onClick={() => setLang("az")}
            aria-label="Azərbaycan dili"
          >
            AZ
          </button>
          <button
            type="button"
            className={lang === "en" ? "active" : ""}
            onClick={() => setLang("en")}
            aria-label="English"
          >
            EN
          </button>
        </div>

        <button
          className={`navbar-toggler${open ? "" : " collapsed"}`}
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`navbar-collapse collapse justify-content-end${open ? " show" : ""}`}
          id="navbarDefault"
        >
          <ul className="navbar-nav">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.href}>
                <a
                  className={`nav-link js-scroll${link.active ? " active" : ""}`}
                  href={link.href}
                  onClick={() => setOpen(false)}
                >
                  {t(link.key)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
