import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

import { FavoritesList } from "./components/favorites-list";
import { TrendingRepos } from "./components/trending-repos";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>

      <div className="nav">
          <ul>
            <li className="nav-link"><Link to="/">Home</Link></li>
            <li className="nav-link"><Link to="favorites-list">Favorites List</Link></li>
          </ul>
        </div>

        <Routes>
          <Route index element={<TrendingRepos />} />
          <Route exact path="/" element={<TrendingRepos />} />
          <Route exact path="favorites-list" element={<FavoritesList />} />
        </Routes>

    
      </Router>
 
    </div>
  );
}

export default App;
