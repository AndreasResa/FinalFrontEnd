import "./App.css";
import Edu from "./component/Edu";
import Img from "./component/Img";
import ListCar from "./component/ListCar";
import Name from "./component/Name";
import Ratings from "./component/Ratings";

const App = () => {
  return (
    <div id="mainbg">
      <Img />
      <Name />
      <div id="About">
        <About />
      </div>
      <ListCar />
      <div id="education">
        <Edu />
        <Ratings />
      </div>
    </div>
  );
};

export default App;