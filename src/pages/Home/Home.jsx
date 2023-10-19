import "./Home.scss";

import {
  Header,
  Jumbotron,
  FaqAccordion,
  OptForm,
  Footer,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Header />
      <Jumbotron />
      <div className="accordionContainer">
        <div className="inner">
          <h1 className="title">Frequently Asked Questions</h1>
          <FaqAccordion />
          <OptForm />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
