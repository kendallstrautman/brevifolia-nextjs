import Layout from "../components/Layout";
import infoStyles from "../styles/pages/info.scss";
import data from "../../config.json";

export default function Info(props) {
  return (
    <Layout pathname='info' bgColor={props.frontmatter.background_color} siteTitle={props.title}>
    <section className="info_blurb">
      <ReactMarkdown source={props.markdownBody} />
    </section>
    <style jsx>{`
      .info_blurb {
        max-width: 800px;
        padding: 1.5rem 1.25rem;
      }
      
      @media (min-width: 768px) {
        .info_blurb {
          padding: 2rem;
        }
      }
      
      @media (min-width: 1440px) {
        .info_blurb {
          padding: 3rem;
        }
      }
    `}</style>
  </Layout>
  );
}


Info.getInitialProps = async function() {
  const content = await import(`../data/info.md`)
  const config = await import(`../data/config.json`)
  const data = matter(content.default)

  return {
    fileRelativePath: `src/data/info.md`,
    title: config.title,
    ...data
  }
}