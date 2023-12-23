import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = lazy(() => import("./components/Home/Home"));
const Profile = lazy(() => import("./components/Profile/Profile"));
const Login = lazy(() => import("./components/Login/login"));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
