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
    })(require.context("../content/posts", true, /\.md$/));
    console.log(posts);
    return posts;
  }
  function renderPosts(posts) {
    return posts.map(post => (
      <Link key={post.slug} href="/">
        <li className={blogListStyles.li}>
          <div className={blogListStyles.hero_image}>
            <img src="https://source.unsplash.com/random" />
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

{
  /* <Link href="/">
        <li className={blogListStyles.li}>
          <div className={blogListStyles.hero_image}>
            <img src="https://source.unsplash.com/random" />
          </div>
          <div className={blogListStyles.blog__info}>
            <h1>Blog Title</h1>
            <h3> July 07, 1992</h3>
            <p>Blog summary</p>
          </div>
        </li>
      </Link> */
}
// BlogList.getInitialProps = async function() {
//   // Get posts from folder
//   const posts = (ctx => {
//     const keys = ctx.keys();
//     const values = keys.map(ctx);
//     const data = keys.map((key, index) => {
//       // Create slug from filename
//       const slug = key
//         .replace(/^.*[\\\/]/, "")
//         .split(".")
//         .slice(0, -1)
//         .join(".");
//       const value = values[index];
//       // Parse document
//       const document = matter(value);
//       return {
//         document,
//         slug
//       };
//     });
//     return data;
//   })(require.context("../content/posts", true, /\.md$/));
//   return {
//     posts
//   };
// };

export default BlogList;
