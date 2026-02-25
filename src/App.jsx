import "./App.css";
import { LandingPage } from "./components/home/LandingPage";
import MerchandisePage from "./components/MerchandisePage";
import Eventpage from "./components/Events/Eventpage";
import EventRegistration from "./components/Events/EventRegistration";
import { DashboardPage } from "./components/protected_routes/DashboardPage";

import { ProtectedRoute } from "./components/protected_routes/AuthRoutes";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {

  const [user, setUser] = useState({
    id: "123",
    name: "bob pop",
    permissions: [],
    department: "idk man",
    year: "Eighth",
  });
  
  const handleLogout = () => setUser(null);

  return (
    <>
      <Router>
        <Routes>
          <Route index element={<LandingPage />} />
          <Route element={<ProtectedRoute accessAllowed={!!user} />}>
            <Route
              path="/dashboard"
              element={<DashboardPage user={user} logout={handleLogout} />}
            />
          </Route>
          <Route path="/merchandise" element={<MerchandisePage />} />
          <Route path="/events" element={<Eventpage />} />
          <Route path="/eventregistration" element={<EventRegistration />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
