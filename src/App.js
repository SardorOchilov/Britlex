import "./App.css";

import AboutUs from "./containers/about_us";
import ContactUs from "./containers/contactUs";
import Footer from "./containers/footer";
import Header from "./containers/header";
import Pricing from "./containers/pricing";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <AboutUs></AboutUs>
      <Pricing></Pricing>
      <ContactUs></ContactUs>
      <Footer></Footer>
    </div>
  );
}

export default App;
