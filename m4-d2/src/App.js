
import  './App.css'
import MyNavBar from './Components/MyNavBar';
import Home from './Components/Home'
import MyFooter from './Components/MyFooter';
import MyJumbotron  from './Components/Jumbotron';


function App() {
  return (
    <div>
     <MyNavBar/>
     <MyJumbotron />
     <Home/>
     <MyFooter/>
    </div>
  );
}

export default App;
