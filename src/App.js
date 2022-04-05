import { Route, Routes } from "react-router-dom";
import AllCanvasesPage from "./pages/AllCanvasesPage";
import BounceBackPage from "./pages/BounceBackPage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import ActiveCanvasPage from "./pages/ActiveCanvasPage";
import {SocketContext, socket} from './context/socket';

const App = () => {
  return (
    <SocketContext.Provider value={socket}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/bounceback" element={<BounceBackPage />} />
          <Route path="/allcanvases" element={<AllCanvasesPage />} />
          <Route path="/canvas" element={<ActiveCanvasPage />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
      </div>
    </SocketContext.Provider>
  );
}

export default App;
