import HeaderContainer from "./Header/HeaderContainer";
import HomeContainer from "./HomeMain/HomeContainer";
import WatchContainer from "./watch/WatchContainer";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import MusicMain from "./Music/MusicMain";
import Postform from "./HomeMain/PostForm/Postform";
import RightWatch from './watch/RightWatch'
import NowPlaying from './watch//NowPlaying';
import Shows from "./watch/Shows";
function App() {
  return (
    <div className='w-screen h-auto  ' >
      <Postform/>
      <HeaderContainer/>
    <Routes>
          <Route path="/"  element={<HomeContainer/> }  />
        
          <Route path="/watch"   element={<WatchContainer/>} >
            <Route path='Home' element={<RightWatch/>} />
            <Route path='Live' element={<NowPlaying/>} />  
            <Route path='Shows' element={<Shows/>} />  
          </Route>        

          <Route path="/"   element={<MusicMain/>} />

         
     </Routes>

     
    </div>
  );
}

export default App;
