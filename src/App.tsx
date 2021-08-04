import Header from "./components/styleguide/header.component";
import SubHeader from "./components/styleguide/sub-header.component";
import "./app.scss";
import Content from "./components/styleguide/content.component";
import Footer from "./components/styleguide/footer.component";

const App = () => {
  return (
    <>
      <Header />
      <SubHeader onClick={() => console.log("test")}>Test</SubHeader>
      <Content />
      <Footer />
    </>
  );
};

export default App;
