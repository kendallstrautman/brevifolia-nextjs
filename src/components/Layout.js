import Header from "./Header";

export default function Layout(props) {
  return (
    <section>
      <Header />
      <div>{props.children}</div>
    </section>
  );
}
