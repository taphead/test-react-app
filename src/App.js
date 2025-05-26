import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import FormView from "./pages/FormView";
import NewsView from "./pages/NewsView";
import PopularView from "./pages/PopularView";

function App() {
  return (
    <div className="App">
      <Navbar className="navbar"></Navbar>
      <Routes>
        <Route path="/" element={<NewsView />} />
        <Route path="/new" element={<FormView />} />
        <Route path="/popular" element={<PopularView />} />
        <Route path="/trending" element={<PopularView />} />
        <Route path="/categories" element={<PopularView />} />
      </Routes>
    </div>
  );
}

export default App;
