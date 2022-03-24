import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { FavoritesList } from "./components/favorites-list";
import { TrendingRepos } from "./components/trending-repos";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<h1>Home Page</h1>} />
          <Route exact path="page1" element={<TrendingRepos />} />
          <Route exact path="page2" element={<FavoritesList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
