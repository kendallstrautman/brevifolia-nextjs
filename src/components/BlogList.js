import Link from "next/link";
import blogListStyles from "../styles/components/bloglist.module.scss";

export default function BlogList() {
  return (
    <ul className={blogListStyles.list}>
      <Link href="/">
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
      </Link>
    </ul>
  );
}
