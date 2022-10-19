import './App.css';
import NavigationBar from "./components/NavigationBar"
import Intro from "./components/Intro"
import Trending from "./components/Trending"
import Film from "./components/Film"
import"./style/LandingPage.css"

function App() {
  return (
   <div>
    {/*awal*/}
      <div className="myBG">
        <NavigationBar/>
        <Intro/>
      </div>
    {/*akhir*/}

    {/*Trending*/}
    <div className="trending">
      <Trending/>
    </div>
    {/*akhir Trending*/}
    <div className="film">
      <Film/>
    </div>
   </div>
  );
}

export default App
