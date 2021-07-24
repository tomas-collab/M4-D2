
import  './App.css'
import MyNavBar from './Components/MyNavBar';
import Home from './Components/Home'
import MyFooter from './Components/MyFooter';
import MyJumbotron  from './Components/Jumbotron';
import LatestRelease from './Components/LatestRelease';


function App() {
  return (
    <div className='background'>
     <MyNavBar title='Strive shoping book'/>
     <MyJumbotron />
     <LatestRelease/>
     <Home/>
     <MyFooter/>
    </div>
  );
}

export default App;
