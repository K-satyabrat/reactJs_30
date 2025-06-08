import "./App.css";
import Accordion from "./components/accordion";
import RandomColor from "./components/random-color-generator";
import StarRating from "./components/star_rating";
import Weather from "./components/weather-app";

function App() {
  return (
    <>
      {/* <Accordion /> */}
      {/* <RandomColor/> */}
      {/* <StarRating noOfStar={10}/> */}
      <Weather />
    </>
  );
}

export default App;
