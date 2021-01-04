import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { useEffect } from 'react';


function App() {
  const [{},dispatch]=useStateValue();
  useEffect(()=>{
    //will only run when the app component loads...
    auth.onAuthStateChanged(authUser=>{
     // console.log("the user is>>>",authUser);
    
    if(authUser){
      dispatch({
        type:'SET_USER',
        user:authUser
      })

    }else{
      dispatch({
        type:'SET_USER',
        user:null
      })

    }
  })

  },[])
  return (
    //BEM
    <div className="App">
      <Router>
          <Switch>
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/checkout">   
              <Header/>
              <Checkout/>
            
            </Route>
          
            <Route path="/">   
               <Header/>
              <Home/>
            </Route>
          </Switch>
      </Router>
  
    </div>
  );
}

export default App;
