import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap";
import MuiDateRangePicker from "./Components/MuiDateRangePicker";
import AdminPanel from "./Components/AdminPanel";



function App() {
  return (
    <React.Fragment>
    <MuiDateRangePicker />
      <AdminPanel />
      
    </React.Fragment>
  );
}

export default App;
