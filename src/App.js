import "./App.css";
import Dashboard from "./Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    alert('New')
  },[])
  return (
    <>
      <ToastContainer />
      <Dashboard/>
    </>
  );
}

export default App;
