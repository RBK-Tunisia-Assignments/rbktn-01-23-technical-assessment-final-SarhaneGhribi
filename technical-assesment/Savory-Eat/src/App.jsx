//the default user to update and delete is {user_Id:1,username:'testuser',email:'test@test.com',password:'password}
import React ,{useEffect, useState}from "react";
import "./App.css";
import Home from "./components/Home.jsx";
import AllRecepies from "./components/AllRecipies.jsx"
import axios from "axios"
import Add from "./components/Add";
function App() {
const [view,setView]=useState('Home')
const [data,setData]=useState([])
  let changeView = (view) => {
    setView(view);
  };
  let fetchData=()=>{
    axios.get("http://localhost:4000/")
    .then(res=>setData(res.data))
    .catch(err=>console.log(err))
  }
   useEffect(()=>{
    fetchData()
   },[])
  return (
    <div className="App">
      <nav className="nav">
        <div
          className="nav-item is-active"
          active-color="orange"
          onClick={() => setView("Home")}
        >
          Home
        </div>

        <div
          className="nav-item"
          active-color="green"
          onClick={() => setView("Allrecepies")}
        >
          All Recipies
        </div>
        <div
          className="nav-item"
          active-color="red"
          onClick={() => setView("Addrecepie")}
        >
          Addrecepie
        </div>
        <div className="nav-item" active-color="red">
          <input type="text"  />
          <button>search</button>
        </div>
        <span className="nav-indicator"></span>
      </nav>
      {view === "Home" && <Home changeView={changeView}/>}
      {view === "Allrecepies" && <AllRecepies data={data} changeView={changeView} fetchData={fetchData}/>}
      {view === "Addrecepie" && <Add fetchData={fetchData} changeView={changeView}/>}
     
     
      <div></div>
    </div>
  );
}

export default App;
