import React from 'react';
import { Route, Switch ,Redirect } from "react-router-dom";
import Header from './components/header/header.component.jsx';
import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.component.jsx'
import SignInSignOutPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
import './App.css';
import { auth ,userProfileDocument} from './firebase/firebase.util';
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/users.actions.js'


class App extends React.Component{
  unSubscribeAuth = null
  componentDidMount(){
    const {setCurrentUser} = this.props
  this.unSubscribeAuth =     auth.onAuthStateChanged( async usersAuth => {
    if (usersAuth) {
    const userRef = await userProfileDocument(usersAuth)
    userRef.onSnapshot(snapshot=>{
      setCurrentUser({
        id: snapshot.id,
        ...snapshot.data()
          
        })
     })
      
    }
    setCurrentUser(usersAuth )
  })
  
}
  componentWillUnmount(){
    this.unSubscribeAuth()
  }
  render(){
     return (
       <div>
         <Header/>
         <Switch>
           <Route exact path="/" component={HomePage} />
           <Route exact path="/shop" component={ShopPage} />
           <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to='/'/> ) : (<SignInSignOutPage/>)} />
         </Switch>
       </div>
     );

  }
 
}
const mapStateToProps = ({user})=>({
  currentUser : user.currentUser
}
)
const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
