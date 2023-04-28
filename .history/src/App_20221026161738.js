import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />

      <Dashboard/>
      {/* <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes> */}
    </>
  );
}

export default App;
