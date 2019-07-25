import React from "react";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import Layout from "../components/Layout";
import blogStyles from "../styles/pages/blog.scss";

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const post = await import(`../posts/${query.id}.md`);
    const document = matter(post.default);
    return {
      ...document
    };
  }
  render() {
    console.log(blogStyles);
    return (
      <Layout>
        <article className={blogStyles.blog}>
          <figure className={blogStyles.blog__hero}>
            <img
              src={this.props.data.hero_image}
              alt={`blog_hero_${this.props.data.title}`}
            />
          </figure>
          <div className={blogStyles.blog__info}>
            <h1>{this.props.data.title}</h1>
            <h3>some date</h3>
          </div>
          <div className={blogStyles.blog__body}>
            <ReactMarkdown source={this.props.content} />
          </div>
          <h2 className={blogStyles.blog__footer}>
            Written By: {this.props.data.author}
          </h2>
        </article>
      </Layout>
    );
  }
}
