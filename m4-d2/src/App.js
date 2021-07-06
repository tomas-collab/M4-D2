
import  './App.css'
import MyNavBar from './Components/MyNavBar';
import Home from './Components/Home'
import MyFooter from './Components/MyFooter';
import MyJumbotron  from './Components/Jumbotron';


function App() {
  return (
    <div className='background'>
     <MyNavBar title='Strive shoping book'/>
     <MyJumbotron />
     <Home/>
     <MyFooter/>
    </div>
  );
}

export default App;
