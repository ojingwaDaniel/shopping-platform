import React from 'react';
import { Route, Switch } from "react-router-dom";
import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx';
import SignInSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import './App.css';
import { auth ,userProfileDocument} from './firebase/firebase.util';


class App extends React.Component{
  constructor(){
    super()
    this.state = {
      currentUser : null
    }

  }
  unSubscribeAuth = null
  componentDidMount(){
  this.unSubscribeAuth =     auth.onAuthStateChanged( async usersData => {
    if (usersData) {
    const userRef = await userProfileDocument(usersData);
    userRef.onSnapshot(snapshot=>{
      this.setState(
        {
          currentUser: {
            id: snapshot.id,
            ...snapshot.data(),
          },
        },
      );
      
    })
      
    }else {
      this.setState({ currentUser: usersData });

    }
      
    }
  )
  
}
  componentWillUnmount(){
    this.unSubscribeAuth()
  }
  render(){
     return (
       <div>
         <Header currentUser = {this.state.currentUser} />
         <Switch>
           <Route exact path="/" component={HomePage} />
           <Route exact path="/shop" component={ShopPage} />
           <Route exact path="/signin" component={SignInSignOutPage} />
         </Switch>
       </div>
     );

  }
 
}

export default App;
