import React, { useState } from "react";
import axios from "axios"
import "../index.scss";
const AllRecepies = ({data,changeView,fetchData}) => {
  const[name,setName]=useState("")
  const[cTime,setcTime]=useState(null)
  const[pTime,setpTime]=useState(null)
  const[serves,setServes]=useState(null)
  const[category,setCategory]=useState("")
  const[description,setDescription]=useState("")
  const[ingridients,setIngridients]=useState("")
  const[img,setImg]=useState("")
  const [details,setDetails]=useState(false)
 
console.log(data)
  const handelDelete=(Dname)=>{
  axios.delete(`http://localhost:4000/${Dname}`)
  .then(suc=>console.log(suc))
  .catch(err=>console.log(err))  
  }
  
  const handelSubmit=(update)=>{
    axios.patch(`http://localhost:4000/${update}`,{ 
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
     setDetails(false)
    fetchData()})
    .catch(err=>console.log(err))
      }
  return (
   <div className="card-container">
    
    {data.map((e,i)=>(<div className="card" key={i} >
        <button className="delete" onClick={()=>handelDelete(e.recepie_Name)}>delete</button>
        <button className="update" onClick={()=>setDetails(true)}>update </button>

        <>
          <div className="header">
            <img
              className="img"
              src={e.recepie_Image}
              alt="food"
            />
          </div>
          <div className="text">
            <h1 className="food" >{e.recepie_Name}</h1>
            <i>{e.Cook_Time}</i> <br />
            <i> Serves:{e.Serves}</i>
          </div>
        </>
        {details ? <div className="add-recipe-form ">
      <div className="form-group">
        <label>Name:</label>
        <input type="text" defaultValue={e.recepie_Name} placeholder="Name" onChange={e=>setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Cook Time:</label>
        <input type="number" defaultValue={e.Cook_Time} placeholder="Cooking Time" onChange={e=>setcTime(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Prep Time:</label>
        <input type="number" defaultValue={e.Prep_Time} placeholder="Preparation Time" onChange={e=>setpTime(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Serves:</label>
        <input type="number" defaultValue={e.Serves} placeholder="serves" onChange={e=>setServes(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Category:</label>
        <input type="text" defaultValue={e.categorie} placeholder="Category" onChange={e=>setCategory(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Description:</label>
        <input type="text" defaultValue={e.recepie_Description} placeholder="Description" onChange={e=>setDescription(e.target.value)}/>
      </div>
      <div className="form-group">
        <label>Ingredients:</label>
        <input placeholder="Ingredients" defaultValue={e.recepie_Description} onChange={e=>setIngridients(e.target.value)}/>
      </div>

      <div className="form-group">
        <label>Image:</label>
        <input type="text" defaultValue={e.recepie_Image} placeholder="Image URL"onChange={e=>setImg(e.target.value)} />
      </div>
      <button className="create-recipe-btn" onClick={()=>handelSubmit(e.recepie_Name)}>UPDATE</button>
    </div>:null}
      </div>))}
    </div>
  );
};

export default AllRecepies;
