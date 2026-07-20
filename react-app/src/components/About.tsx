import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { fetchSkills, type SkillItem } from "../api";

export default function About() {
  const { t } = useLanguage();
  const [skills, setSkills] = useState<SkillItem[]>([]);

  useEffect(() => {
    fetchSkills()
      .then(setSkills)
      .catch(() => setSkills([]));
  }, []);

  return (
    <section id="about" className="about-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="box-shadow-full">
              <div style={{ textAlign: "center", width: "100%", marginBottom: 30 }}>
                <h3 className="title-a">{t("about_title")}</h3>
                <p className="subtitle-a">{t("about_subtitle")}</p>
                <div className="line-mf mx-auto"></div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="row align-items-center mb-4">
                    <div className="col-sm-6 col-md-5">
                      <div className="about-img text-center">
                        <img
                          src="/img/pp.jpeg"
                          alt="Elcan Mammadov"
                          className="img-fluid"
                          style={{ maxWidth: 250, height: "auto", borderRadius: 5, marginTop: 20 }}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6 col-md-7">
                      <div className="about-info">
                        <p>
                          <span className="title-s">{t("about_name")}</span> Elcan Mammadov
                        </p>
                        <p>
                          <span className="title-s">{t("about_profile")}</span> {t("about_profile_value")}
                        </p>
                        <p>
                          <span className="title-s">{t("about_location")}</span> {t("about_location_value")}
                        </p>
                        <p>
                          <span className="title-s">{t("about_email")}</span>{" "}
                          <a href="mailto:elcan.memmedov@div.edu.az">elcan.memmedov@div.edu.az</a>
                        </p>
                        <p>
                          <span className="title-s">{t("about_phone")}</span>{" "}
                          <a href="tel:+994504180032">(050) 418-00-32</a>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="skill-mf">
                    <p className="title-s">{t("about_skills")}</p>
                    {skills.map((skill) => (
                      <div className="skill-item" key={skill.name}>
                        <div className="d-flex justify-content-between">
                          <span>{skill.name}</span>
                          <span>{skill.level}%</span>
                        </div>
                        <div className="progress">
                          <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="about-me pt-4 pt-md-0 px-3">
                    <p className="lead">{t("about_p1")}</p>
                    <p className="lead">{t("about_p2")}</p>
                    <p className="lead">{t("about_p3")}</p>
                    <p className="lead">{t("about_p4")}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
