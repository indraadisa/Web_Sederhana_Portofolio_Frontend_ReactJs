import "./App.css";
import Navigasi from "./componets/Navigasi";
import Intro from "./componets/Intro";
import "./style/Landing.css";
import Hewan from "./componets/Hewan";
import Makanan from "./componets/Makanan";

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigasi />
        <Intro />
      </div>

      <div className="hewan">
        <Hewan />
      </div>

      <div className="makanan">
        <Makanan />
      </div>
    </div>
  );
}

export default App;
