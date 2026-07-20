import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { fetchServices, type ServiceItem } from "../api";

export default function Services() {
  const { t, lang } = useLanguage();
  const [services, setServices] = useState<ServiceItem[]>([]);

  useEffect(() => {
    fetchServices()
      .then(setServices)
      .catch(() => setServices([]));
  }, []);

  return (
    <section id="service" className="services-mf route sect-pt4">
      <div className="container">
        <div style={{ textAlign: "center", width: "100%", marginBottom: 30 }}>
          <h3 className="title-a">{t("services_title")}</h3>
          <p className="subtitle-a">{t("services_subtitle")}</p>
          <div className="line-mf mx-auto"></div>
        </div>

        <div className="row text-center">
          {services.map((service) => (
            <div className="col-md-4 mb-4" key={service.title.en}>
              <div className="service-box">
                <div className="service-ico mb-3">
                  <span className="ico-circle">
                    <i className={service.icon}></i>
                  </span>
                </div>
                <div className="service-content">
                  <h2 className="s-title">{service.title[lang]}</h2>
                  <p className="s-description">{service.description[lang]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
