import Layout from "../components/Layout";
import BlogList from "../components/BlogList";
import "../styles/index.scss";

const Index = (props) => {
  return (
    <Layout pathname={props.url.pathname}>
      <section>
        <BlogList />
      </section>
    </Layout>
  );
};


export default Index;
