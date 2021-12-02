import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter/AppRouter";

//Components
import MainBar from "./components/MainBar/MainBar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <MainBar />
      <AppRouter />
      <Footer />
    </Router>
  );
}

export default App;
