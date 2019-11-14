import Layout from "../components/Layout";
import BlogList from "../components/BlogList";

const Index = (props) => {
  return (
    <Layout pathname="/" siteTitle={props.title} siteDescription={props.description}>
      <section>
        <BlogList />
      </section>
    </Layout>
  );
};

export default Index;

Index.getInitialProps = async function() {
  const content = await import(`../data/config.json`)

  return {
    fileRelativePath: `src/data/config.json`,
    ...content
  }
}