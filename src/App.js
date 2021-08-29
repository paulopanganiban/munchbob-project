import { useDispatch } from "react-redux";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={HomePage}/>
      <Route path='/shop' component={ShopPage}/>
    </div>
  );
}

export default App;
