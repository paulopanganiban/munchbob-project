import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import Header from "./components/Header";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import { auth, createUserProfileDocument } from "./firebase";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { setCurrentUser, signOutOfApp } from "./redux/userReducer";

function App() {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (user) {
        const userRef = await createUserProfileDocument(user)
        userRef.onSnapshot(snapshot => {
          dispatch(setCurrentUser({
            // dispatch({type: 'SET_CURRENT_USER', payload: user})
            id: snapshot.id,
            ...snapshot.data()
          }))
          history.push('/')
        })
      } else {
        dispatch(signOutOfApp())
      }
    })
    return unsubscribe
  }, [])
  return (
    <div className="App">
      <Header />
      <Route exact path='/' component={HomePage} />
      <Route path='/shop' component={ShopPage} />
      <Route path='/signin' component={SignIn} />
      <Route path='/signup' component={SignUp} />
      <Route path='/checkout' component={CheckoutPage} />
    </div>
  );
}

export default App;
