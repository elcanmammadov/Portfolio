import { useLanguage } from "../i18n/LanguageContext";

export default function Intro() {
  const { t } = useLanguage();

  return (
    <div
      id="home"
      className="intro route bg-image"
      style={{ backgroundImage: "url(/img/408956557bb3f2261f0927cf37097a09.jpg)" }}
    >
      <div className="overlay-itro"></div>
      <div className="intro-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="intro-title mb-4">{t("intro_title")}</h1>
            <p
              className="intro-subtitle"
              style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
            >
              <span className="text-slider-items">Full Stack Developer,Software Developer,Industrial Engineer,IT MBA Candidate</span>
              <strong className="text-slider"></strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
