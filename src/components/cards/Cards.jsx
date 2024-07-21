import React, { useState } from 'react'
import './Cards.css'
import { FaCartPlus } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";


function Cards({ data, setCart, cart ,like,setLike}) {
  function likeFun(id) {
    const newLike=data.filter((item)=>{
      return item.id==id
    })
    setLike([...like,newLike[0]])
  }
  function addFun(id) {
    const newDataCart = data.filter((item) => {
      return item.id == id
    })

    setCart([...cart, newDataCart[0]])
  }
  return (
    <div className="cards">
      {data &&
        data.map((item, index) => {
          return (
            <div className="card" key={item.id}>
              <FaHeart onClick={()=>{
                likeFun(item.id)
              }} />
              <div className="addtoCart">
                <FaCartPlus onClick={() => {
                  addFun(item.id);
                }} />
              </div>
              <img src={item.image} alt="" />
              <div className='card_info'>
                <h2>{item.title.slice(0, 10)}...</h2>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Cards