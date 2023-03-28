import React from 'react'
import "./Recepelist.css"

export default function RecepeRecepelistlist({recepe}) {
  return (
      <div className='recepe-list-item container'
      onClick={()=>{
       window.open(recepe["recipe"]["url"]);
      }}>
    <img src={recepe["recipe"]["image"]} alt="pictures"
    className='recepe-img'/>
    <p className='recepe-name'>{recepe["recipe"]["label"]}</p>
    <p className='text'>know more.</p>
    </div>
  
  )
}
