import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import AuthPage from "./pages/AuthPage";

export default function Page() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="/login" element={<AuthPage isLogin />} />
        <Route path="/register" element={<AuthPage isLogin={false} />} />
      </Route>
    </Routes>
  );
}
