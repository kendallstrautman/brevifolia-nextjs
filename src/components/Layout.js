import Header from "./Header";
import layoutStyles from "../styles/components/layout.module.scss";

export default function Layout(props) {
  const primaryColor = "#404040";
  return (
    <section
      className={`${layoutStyles.layout} ${typeof window !== "undefined" &&
        window.location.pathname == "/info" &&
        layoutStyles.info_page}`}
      style={{
        backgroundColor: `${typeof window !== "undefined" &&
          window.location.pathname == "/info" &&
          primaryColor}`
      }}
    >
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
    </section>
  );
}
