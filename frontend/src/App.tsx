import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage";

export default function Page() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/signup" element={<AuthPage />} />
      </Route>
    </Routes>
  );
}
