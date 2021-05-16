import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { Plans } from "./components/plans";
import { Contact } from "./components/contact";
import JsonData from "./asset/environment/data.json";
// import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Plans data={landingPageData.Plans} />
      <Features data={landingPageData.Features} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default App;
