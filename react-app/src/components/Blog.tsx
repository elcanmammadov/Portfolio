import { useEffect, useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { fetchBlog, type BlogItem } from "../api";

export default function Blog() {
  const { t, lang } = useLanguage();
  const [posts, setPosts] = useState<BlogItem[]>([]);

  useEffect(() => {
    fetchBlog()
      .then(setPosts)
      .catch(() => setPosts([]));
  }, []);

  return (
    <section id="blog" className="blog-mf sect-pt4 route">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="title-box text-center">
              <h3 className="title-a">{t("blog_title")}</h3>
              <p className="subtitle-a">{t("blog_subtitle")}</p>
              <div className="line-mf"></div>
            </div>
          </div>
        </div>
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4" key={post.title.en}>
              <div className="card card-blog">
                <div className="card-img">
                  <img src={post.img} alt="" className="img-fluid" />
                </div>
                <div className="card-body">
                  <div className="card-category-box">
                    <div className="card-category">
                      <h6 className="category">{post.category[lang]}</h6>
                    </div>
                  </div>
                  <h3 className="card-title">{post.title[lang]}</h3>
                  <p className="card-description">{post.description[lang]}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
