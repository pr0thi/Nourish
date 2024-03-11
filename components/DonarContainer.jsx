
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import FoodMap from './FoodMap';
import DonarInfoCard from './DonarInfoCard';
const DonarContainer = () =>{

  const [listOfRestaurants, setListOfRestaurant] = useState([]);

  const[filteredRestaurant, setFilteredRestaurant] = useState([]);



  const data = [
    {
      "info": {
        "id": "16866",
        "name": "Akshit Gupta",
        "locality": "SRMIST Ktr",
        "costForTwo": "603203",
        "cuisines": [
          "Rice", 
          "Dal"
        ],
        "distance": "4 km",
        "val":4,
        "title": "Raw Materials"}
    },
    {
      "info": {
        "id": "16867",
        "name": "Harsh Pruthi",
        "locality": "VGN Flats",
        "costForTwo": "603202",
        "cuisines": [
          "Cakes", 
          "Juices"
        ],
        "distance": "14 km",
        "val":14,
        "title": "Packaged Foods"}
    },
    {
      "info": {
        "id": "16868",
        "name": "Ankur Saini",
        "locality": "VIT Chennai",
        "costForTwo": "603203",
        "cuisines": [
          "Paneer", 
          "Roti"
        ],
        "distance": "2 km",
        "val":2,
        "title": "Cooked Meal"}
    }, 
    {
      "info": {
        "id": "16869",
        "name": "Aman Pandey",
        "locality": "Estancia Flats",
        "costForTwo": "603208",
        "cuisines": [
          "Sweets", 
          "Dal"
        ],
        "distance": "10 km",
        "val":10,
        "title": "Packaged Foods"}
    }

  ]


  const fetchData =  async() =>{
    setListOfRestaurant(data);
    setFilteredRestaurant(data);
    
  }; 

  useEffect(()=>{
    fetchData();
  }, []);
  
  const[title, setTitle] = useState("Nearest Donars");

  const[propsval,setpropsval] = useState(0);

  return (
   


      <div className="body">

      <FoodMap valData={propsval}/>
          <div className="filter">

              <button className="filter-btn" onClick={()=>{
  
                  const filteredList = listOfRestaurants.filter(
                      (res)=>res.info.val<5
                  );
                  if(title==="Nearest Donars"){
                    setFilteredRestaurant(filteredList);
                    setpropsval(1);
                  }
                  if(title==="Back"){
                    setFilteredRestaurant(data);
                    setpropsval(0);
                  }  
                  title==="Back" ? setTitle("Nearest Donars") : setTitle("Back")
                  
                  
              }}> {title} </button>
              
          </div>
          <div className="res-container">
          


          {
            filteredRestaurant.map((restaurant)=>
              (<Link key={restaurant.info.id}  to={"restaurants/"+ restaurant.info.id}>
                <DonarInfoCard resData={restaurant}/>
                </Link>
                )
          )}           
          </div>
      </div>
  )
}

export default DonarContainer






