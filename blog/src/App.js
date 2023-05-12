import { useContext } from "react";
import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Context } from "./context/Context";
function App() {
  const { user } = useContext(Context);
  return (
    <BrowserRouter basename="/blog-site">
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/posts" element={<Homepage />} />
        <Route
          path="/register"
          element={user ? <Homepage /> : <Register />}
        />
        <Route path="/login" element={user ? <Homepage /> : <Login />} />
        <Route path="/post/:id" element={<Single />} />
        <Route
          path="/write"
          element={ user?<Write />:<Register/> }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
