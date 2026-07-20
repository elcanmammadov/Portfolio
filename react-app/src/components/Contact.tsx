import { useState, type FormEvent } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { postContact } from "../api";

export default function Contact() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (form.name.length < 4 || !form.email.includes("@") || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    try {
      await postContact(form);
      setStatus("sent");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      className="paralax-mf footer-paralax bg-image sect-mt4 route"
      style={{ backgroundImage: "url(/img/overlay-bg.jpg)" }}
    >
      <div className="overlay-mf"></div>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="contact-mf">
              <div id="contact" className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title-box-2">
                      <h5 className="title-left">{t("contact_send_title")}</h5>
                    </div>
                    <div>
                      <form className="contactForm" role="form" onSubmit={handleSubmit}>
                        {status === "sent" && (
                          <div id="sendmessage" style={{ display: "block" }}>
                            {t("contact_sent")}
                          </div>
                        )}
                        {status === "error" && (
                          <div id="errormessage" style={{ display: "block" }}>
                            {t("contact_error")}
                          </div>
                        )}
                        <div className="row">
                          <div className="col-md-12 mb-3">
                            <div className="form-group" style={{ marginTop: 7 }}>
                              <input
                                type="text"
                                name="name"
                                className="form-control"
                                id="name"
                                placeholder={t("contact_name_ph")}
                                value={form.name}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                name="email"
                                id="email"
                                placeholder={t("contact_email_ph")}
                                value={form.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                name="subject"
                                id="subject"
                                placeholder={t("contact_subject_ph")}
                                value={form.subject}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-md-12 mb-3">
                            <div className="form-group">
                              <textarea
                                className="form-control"
                                name="message"
                                rows={5}
                                placeholder={t("contact_message_ph")}
                                value={form.message}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <button
                              type="submit"
                              className="button button-a button-big button-rouded"
                              disabled={status === "sending"}
                            >
                              {t("contact_send_btn")}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="title-box-2 pt-4 pt-md-0">
                      <h5 className="title-left">{t("contact_get_in_touch")}</h5>
                    </div>

                    <div className="more-info">
                      <p className="lead">
                        {t("contact_info")}
                        <br />
                        <br />
                        {t("contact_info2")}
                      </p>
                    </div>

                    <ul className="list-ico">
                      <li>
                        <span className="ion-ios-location"></span>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=Baku,+Azerbaijan"
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t("contact_location")}
                        </a>
                      </li>
                      <li>
                        <span className="ion-ios-telephone"></span>
                        <a href="tel:+994504180032">(050) 418-00-32</a>
                      </li>
                      <li>
                        <span className="ion-email"></span>
                        <a href="mailto:elcan.memmedov@div.edu.az">elcan.memmedov@div.edu.az</a>
                      </li>
                    </ul>

                    <div className="socials">
                      <ul>
                        <li>
                          <a
                            href="https://www.linkedin.com/in/elcan-mammadov-mba-437250366/"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="fa-brands fa-linkedin"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://github.com/elcanmammadov" target="_blank" rel="noreferrer">
                            <span className="ico-circle">
                              <i className="fa-brands fa-github"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="https://wa.me/994504180032" target="_blank" rel="noreferrer">
                            <span className="ico-circle">
                              <i className="fa-brands fa-whatsapp"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/senin-username"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <span className="ico-circle">
                              <i className="fa-brands fa-instagram"></i>
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>

                    <footer>
                      <div className="container">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="copyright-box">
                              <p className="copyright">
                                &copy; {t("footer_copyright")} <strong>Portfolio</strong>. {t("footer_rights")}
                              </p>
                              <div className="credits">{t("footer_credits")}</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </footer>
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
