import React from 'react'
import './Navbar.css'
import { FaRegMoon, FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

function Navbar({ setLikeF, likeF,save,cart, setMode, mode ,setSave,like}) {
  return (
    <nav>
      <div className="container">
        <div className="nav">
          <h1>
            <FaCartShopping />
          </h1>
          <div
            onClick={() => {
              setMode(!mode);
            }}
            className="mode"
          >
            {" "}
            <FaRegMoon /> Dark Mode
          </div>
          <div className="like">
            <span>{like.length}</span>
            <FaHeart onClick={()=>{setLikeF(!likeF)}}/>
          </div>
          <div className="shop">
            <span>{cart.length}</span>
            <FaShoppingCart onClick={()=>{setSave(!save)}}/>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar