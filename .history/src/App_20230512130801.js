import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import Files from "./Dashboard/files";


function App() {
  return (
    <>
      <ToastContainer />
      {/* <Dashboard/> */}
      <Files />
      
    </>
  );
}

export default App;
