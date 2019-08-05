import Header from "./Header";
import data from "../../config.json";
import layoutStyles from "../styles/components/layout.scss";

export default function Layout(props) {
  return (
    <section
      className={`${layoutStyles.layout} ${typeof window !== "undefined" &&
        window.location.pathname == "/info" &&
        layoutStyles.info_page}`}
      style={{
        backgroundColor: `${typeof window !== "undefined" &&
          window.location.pathname == "/info" &&
          data.primary_color}`
      }}
    >
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
    </section>
  );
}
