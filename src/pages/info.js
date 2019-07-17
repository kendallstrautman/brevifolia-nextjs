import Layout from "../components/Layout";

export default function Info() {
  return (
    <Layout>
      <section>
        <h2>
          This blog was created using <a href="https://forestry.io">Forestry</a>{" "}
          & <a href="https://gatsbyjs.com">Gatsby </a>
          <br />
          <br />
          To get started, import this site into Forestry or checkout the
          repository.
        </h2>
        <ul>
          <li>
            <p>
              <a href="">Email: info@forestry.io</a>
            </p>
          </li>
          <li>
            <p>
              <a href="">Twitter: twitter handle here</a>
            </p>
          </li>
          <li>
            <p>
              <a href="">Github: Github handle here</a>
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
