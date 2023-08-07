import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";


function App() {

  console.log(window.innerWidth)

  return (
    <>
      <ToastContainer />
      <Dashboard/>    
    </>
  );
}

export default App;
