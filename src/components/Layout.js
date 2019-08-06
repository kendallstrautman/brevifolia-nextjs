import Header from "./Header";
import data from "../../config.json";
import layoutStyles from "../styles/components/layout.scss";

export default function Layout(props) {

  return (
    <section
        className={`${layoutStyles.layout} ${
          props.pathname == "/info" &&
          layoutStyles.info_page}`}
        style={{
          backgroundColor: `${
          props.pathname == "/info" && 
          data.primary_color}`
  }}
    >
      <Header />
      <div className={layoutStyles.content}>{props.children}</div>
    </section>
  );
}