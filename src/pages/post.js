import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const post = await import(`../posts/${query.id}.md`);
    const document = matter(post.default);
    return {
      ...document
    };
  }
  render() {
    console.log(this.props);
    return (
      <Layout>
        <h1>{this.props.data.title}</h1>
        <ReactMarkdown source={this.props.content} />
      </Layout>
    );
  }
}
