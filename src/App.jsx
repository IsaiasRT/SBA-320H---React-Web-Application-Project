import { HashRouter, Routes, Route, Outlet, Link } from "react-router-dom";
import HunterProvider from "./context/HunterProvider.jsx";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Monsters from "./pages/Monsters.jsx";
import MonsterDetails from "./pages/MonsterDetails.jsx";
import HunterJournal from "./pages/HunterJournal.jsx";
import Favorites from "./pages/Favorites.jsx";
import About from "./pages/About.jsx";

function Layout() {
  return (
    <div className="app">
      <Navbar />
      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
}

function NotFound() {
  return (
    <section className="page empty-state">
      <h1>404</h1>
      <p>This part of the New World hasn't been discovered yet.</p>
      <Link className="btn btn-primary" to="/">
        Return to Base Camp
      </Link>
    </section>
  );
}

export default function App() {
  return (
    <HunterProvider>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/monsters" element={<Monsters />} />
            <Route path="/monsters/:id" element={<MonsterDetails />} />
            <Route path="/journal" element={<HunterJournal />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </HashRouter>
    </HunterProvider>
  );
}
