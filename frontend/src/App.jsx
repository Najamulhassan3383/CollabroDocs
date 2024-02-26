import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./screens/LandingPage";
import FeaturesPage from "./screens/FeaturesPage";
import AboutUs from "./screens/AboutUs";
import LoginPage from "./screens/LoginPage";
import SignUpPage from "./screens/SignUpPage";
import Dashboard from "./screens/Dashboard";
import AdminRoute from "./components/AdminRoute";
import EditScreen from "./screens/EditScreen";
import Documents from "./components/Documents";
import ProfilePage from "./screens/ProfilePage";
import Component from "./screens/Dashboardv0";
import MainDashboard from "./components/MainDashboard";

export default function App() {
  const document = {
    title: "Document Title",
    content: "This is my document , how are you doing today my name i faras?",
  };
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/FeaturesPage" element={<FeaturesPage />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/SignUpPage" element={<SignUpPage />} />
          <Route path="" element={<AdminRoute />}>
            <Route path="/dashboard" element={<Component />}>
              <Route
                path="/dashboard/project/:id"
                element={<MainDashboard />}
              />
            </Route>
          </Route>

          <Route path="/edit/:documentId" element={<EditScreen />} />
        </Routes>
      </Router>
    </>
  );
}
