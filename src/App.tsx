import Header from "./components/styleguide/header.component";
import SubHeader from "./components/styleguide/sub-header.component";
import "./app.scss";

const App = () => {
  return (
    <>
      <Header />
      <SubHeader onClick={() => console.log("test")}>Test</SubHeader>
    </>
  );
};

export default App;
