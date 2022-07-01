import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";

import Footer from "./components/Footer/Footer";
import FutureFeatures from "./components/Features/FutureFeatures";
import DownloadSection from "./components/Download/DownloadSection";

function App() {
  return (
    <div className="App">
      <Hero />
      <Features />
      <FutureFeatures />
      <DownloadSection />
      <Footer />
    </div>
  );
}

export default App;
