import NavBar from './Components/NavBar/NavBar';
import './App.css'
import Banner from './Components/Banner/Banner';
import RowPosters from './Components/RowPosters/RowPosters';
import { originals, action } from './urls';

function App() {
  return (
    <div>
      <NavBar/>
      <Banner/>
      <RowPosters title={"Netflix Origins"} url={originals} />
      <RowPosters title={"Actions"} url={action} isSmall />
    </div>
  );
}

export default App;
