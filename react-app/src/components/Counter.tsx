import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { fetchCounters, type CounterItem } from "../api";

export default function Counter() {
  const { lang } = useLanguage();
  const [counters, setCounters] = useState<CounterItem[]>([]);

  useEffect(() => {
    fetchCounters()
      .then(setCounters)
      .catch(() => setCounters([]));
  }, []);

  return (
    <div
      className="section-counter paralax-mf bg-image"
      style={{ backgroundImage: "url(/img/counters-bg.jpg)" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          {counters.map((c) => (
            <div className="col-sm-3 col-lg-3" key={c.text.en}>
              <div className="counter-box">
                <div className="counter-ico">
                  <span className="ico-circle">
                    <i className={c.icon}></i>
                  </span>
                </div>
                <div className="counter-num">
                  <p className="counter">{c.num}</p>
                  <span className="counter-text">{c.text[lang]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
