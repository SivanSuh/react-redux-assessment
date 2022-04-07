import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FormDetail from "./components/FormDetail";
import FormList from "./components/FormList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormDetail />
      {/* <JobList /> */}
      <FormList />
    </div>
  );
}

export default App;
