// import Header from "./Header";
// import data from "../../config.json";
// import layoutStyles from "../styles/components/layout.scss";

// export default function Layout(props) {

//   return (
//     <section
//         className={`${layoutStyles.layout} ${
//           props.pathname == "/info" &&
//           layoutStyles.info_page}`}
//         style={{
//           backgroundColor: `${
//           props.pathname == "/info" && 
//           data.primary_color}`
//   }}
//     >
//       <Header />
//       <div className={layoutStyles.content}>{props.children}</div>
//     </section>
//   );
// }

import Header from "./Header";
import Meta from './Meta'

export default function Layout(props) {
  return (
    <section
    className={`layout ${
      props.pathname == "info" &&
      "info_page"}`
    }
    style={{
      backgroundColor: `${props.bgColor && props.bgColor}`,
      color: `${props.pathname == "info" && 'white'}`
    }}
  >
    <Meta />
    <Header siteTitle={props.siteTitle} />
    <div className="content">{props.children}</div>
    <style jsx>
      {`
        .layout {
          overflow-x: hidden;
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .layout .info_page {
          color: #ebebeb;
        }
        .content {
          flex-grow: 1;
        }
        @media (min-width: 768px) {
          .layout {
            display: block;
          }
          .content {
            flex-grow: none;
            width: 70vw;
            margin-left: 30vw;
          }
        }
      `}
    </style>
  </section>
  );
}