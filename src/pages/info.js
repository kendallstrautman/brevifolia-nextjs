import Layout from "../components/Layout";
import infoStyles from "../styles/pages/info.scss";
import data from "../../config.json";

export default function Info() {
  return (
    <Layout>
      <section className="blog_info">
        <h2>
          This blog was created using{" "}
          <a href={data.contact.website_url}>Forestry</a> &{" "}
          <a href={data.contact.made_with_url}>Gatsby </a>
          <br />
          <br />
          To get started, import this site into Forestry or checkout the
          repository.
        </h2>
        <ul>
          <li>
            <p>
              <a href={`mailto:${data.contact.email}`}>
                Email: info@forestry.io
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={data.contact.twitter_url}>
                Twitter: {data.contact.twitter_handle}
              </a>
            </p>
          </li>
          <li>
            <p>
              <a href={data.contact.github_url}>
                Github: {data.contact.github_handle}
              </a>
            </p>
          </li>
        </ul>
      </section>
      <style jsx>{`
        .blog_info {
          max-width: 800px;
          padding: 1.5rem 1.25rem;
        }
        p {
          color: #ebebeb;
        }

        @media (min-width: 768px) {
          .blog_info {
            padding: 2rem;
          }
        }

        @media (min-width: 1440px) {
          .blog_info {
            padding: 3rem;
          }
        }
      `}</style>
    </Layout>
  );
}
