import { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Table from "./components/Table";
import Dashboard from "./components/Dashboard";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex  bg-slate-200 h-screen">
        <div className="   bg-sky-900 h-full md:w-1/6 static hidden md:block ">
          <Sidebar></Sidebar>
        </div>

        <div className="col-span-6 w-screen md:w-5/6 overflow-y-auto">
          <Navbar></Navbar>
          <Dashboard></Dashboard>
          <Table></Table>
        </div>
      </div>
    </>
  );
}

export default App;
