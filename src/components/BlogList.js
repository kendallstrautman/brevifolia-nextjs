import Link from "next/link";
import blogListStyles from "../styles/components/bloglist.module.scss";
import matter from "gray-matter";
import { useState } from "react";

const BlogList = () => {
  function getPosts() {
    const posts = (ctx => {
      const keys = ctx.keys();
      const values = keys.map(ctx);
      const data = keys.map((key, index) => {
        // Create slug from filename
        const slug = key
          .replace(/^.*[\\\/]/, "")
          .split(".")
          .slice(0, -1)
          .join(".");
        const value = values[index];
        // Parse document
        const document = matter(value.default);
        return {
          document,
          slug
        };
      });
      return data;
    })(require.context("../posts", true, /\.md$/));
    return posts;
  }
  function renderPosts(posts) {
    return posts.map(post => (
      <Link
        key={post.slug}
        href={{ pathname: "/blog", query: { id: post.slug } }}
      >
        <li className={blogListStyles.li}>
          <div className={blogListStyles.hero_image}>
            <img src={post.document.data.hero_image} />
          </div>
          <div className={blogListStyles.blog__info}>
            <h1>{post.document.data.title}</h1>
            <h3> some date</h3>

            <p>summary</p>
          </div>
        </li>
      </Link>
    ));
  }
  const [posts] = useState(getPosts());
  return (
    <ul className={blogListStyles.list}>
      {posts.length > 1 && renderPosts(posts)}
    </ul>
  );
};

export default BlogList;
