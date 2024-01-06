import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Banner1 from "./components/banner1/Banner1";
import Banner2 from "./components/banner2/Banner2";
import WorkFlow from "./components/workFlow/WorkFlow";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";



function App() {
  return(
    <div className="App">  
       <Navbar />
        <Header  className ="headerBox" /> 
      <Banner1 className="baner1Box" />
     <Banner2 className="banner2Box" />
     <WorkFlow className="workFlowBox" />
     <Testimonial className="testimonial" />
      <Footer className="footer" />
      </div>

  );
}

export default App;
