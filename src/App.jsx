import { BrowserRouter } from "react-router-dom";
import AppRoute from "./Routes/AppRoute";
import Sidebar from "./components/SideBar/SideBar";
import Topbar from "./components/TopBar/TopBar";

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex vh-100 vw-100">
        <Sidebar />
        <div className="flex-grow-1 d-flex flex-column bg-light" style={{ overflow: 'hidden' }}>
          <Topbar />
          <div className="p-4 flex-grow-1" style={{ overflowY: 'auto' }}>
            <AppRoute />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
