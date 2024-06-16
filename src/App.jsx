import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Home from "./pages/Home.jsx";
import Onboarding from "./pages/Onboarding.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import SubmitBid from "./pages/SubmitBid.jsx";
import BidHistory from "./pages/BidHistory.jsx";
import Notifications from "./pages/Notifications.jsx";
import Support from "./pages/Support.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/onboarding" element={<Onboarding />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/submit-bid" element={<SubmitBid />} />
        <Route exact path="/bid-history" element={<BidHistory />} />
        <Route exact path="/notifications" element={<Notifications />} />
        <Route exact path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;