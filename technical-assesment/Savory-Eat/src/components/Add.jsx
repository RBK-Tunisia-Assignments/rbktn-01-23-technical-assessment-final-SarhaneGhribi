import React, { useState } from "react";
import "../App.css";
import axios from "axios"

const Add = ({changeView,fetchData}) => {
  const[name,setName]=useState("")
  const[cTime,setcTime]=useState(null)
  const[pTime,setpTime]=useState(null)
  const[serves,setServes]=useState(null)
  const[category,setCategory]=useState("")
  const[description,setDescription]=useState("")
  const[ingridients,setIngridients]=useState("")
  const[img,setImg]=useState("")
  const handelSubmit=()=>{
axios.post("http://localhost:4000/",{ 
  Cook_Time: cTime,
  Prep_Time:pTime,
  recepie_Name:name,
  Serves:serves,
  categorie:category,
  recepie_Image:img,
  recepie_Description :description,
  recepie_Ingredients: ingridients,
  users_user_Id:1
})
.then(suc=>{console.log(suc)
changeView("Allrecepies")
fetchData()})
.catch(err=>console.log(err))
  }
  return (
    <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" placeholder="Name" onChange={e=>setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" placeholder="Cooking Time" onChange={e=>setcTime(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" placeholder="Preparation Time" onChange={e=>setpTime(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" placeholder="serves" onChange={e=>setServes(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" placeholder="Category" onChange={e=>setCategory(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" placeholder="Description" onChange={e=>setDescription(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" onChange={e=>setIngridients(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" placeholder="Image URL"onChange={e=>setImg(e.target.value)} />
      </div>
      <button className="create-recipe-btn" onClick={handelSubmit}>Create Recipe</button>
    </div>
  );
};
export default Add;
