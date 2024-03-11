import React from "react";


const DonarInfoCard = (props) =>{
  const {resData} = props;
  const{ costForTwo, title, name, cuisines, locality, distance} = resData?.info;
  return (
      <div className="res-card">
          <h3>{name}</h3>
          <h4>{title}</h4>
          <h4>{cuisines.join(' , ')}</h4>
          <h4>{locality}</h4>
          <h4>{distance}</h4>
          <h4>{costForTwo}</h4>
      </div>
  )
}

export default DonarInfoCard;