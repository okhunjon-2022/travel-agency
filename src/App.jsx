import "./App.css";
import BestTravels from "./components/best-travels/BestTravels";
import Destination from "./components/destination/Destination";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Popular from "./components/popular/Popular";
import Review from "./components/review/Review";
import Travel from "./components/travel/Travel";

function App() {
  return (
    <>
      <Header />
      <Destination />
      <Travel />
      <Popular />
      <BestTravels />
      <Review />
      <Footer />
    </>
  );
}

export default App;
