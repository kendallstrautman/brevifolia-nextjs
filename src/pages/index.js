import Layout from "../components/layout";
import BlogList from "../components/BlogList";
import "../styles/index.scss";

const Index = () => {
  return (
    <Layout>
      <section>
        <BlogList />
      </section>
    </Layout>
  );
};

export default Index;
