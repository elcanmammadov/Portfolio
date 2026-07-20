import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { fetchProjects, type ProjectItem } from "../api";

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const [projects, setProjects] = useState<ProjectItem[]>([]);

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch(() => setProjects([]));
  }, []);

  return (
    <section id="work" className="portfolio-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">{t("work_title")}</h3>
              <p className="subtitle-a">{t("work_subtitle")}</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>

        <div className="row">
          {projects.map((p) => (
            <div className="col-lg-4 col-md-6 mb-4" key={p.title}>
              <div className="work-box">
                <a href={p.url} target="_blank" rel="noreferrer">
                  <div className="work-img">
                    <img src={p.img} alt={p.title} className="img-fluid" />
                  </div>
                  <div className="work-content">
                    <div className="row">
                      <div className="col-12">
                        <h2 className="w-title">{p.title}</h2>
                        <div className="w-more">
                          <span className="w-ctegory">{p.category[lang]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
