import { Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={HomePage}/>
    </div>
  );
}

export default App;
