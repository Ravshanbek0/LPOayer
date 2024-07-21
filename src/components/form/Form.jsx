import React from 'react'
import './Form.css'

function Form({ getData }) {
  return (
    <div>
      <form action="">
        <label htmlFor="">
          <img src="./imgs/search.png" alt="Search icon" />
          <input
            className="searchState"
            type="text"
            placeholder="Search for a country..."
          />
        </label>
        <select
          onChange={(e) => {
            if (e.target.value == "all") {
              getData(`https://fakestoreapi.com/products`);

            } else {
              getData(`https://fakestoreapi.com/products/category/${e.target.value}`);
            }

          }}
          className="regionFilter"
        >
          <option value="all">All</option>
          <option value="electronics">electronics</option>
          <option value="men's clothing">men's clothing</option>
          <option value="jewelery">jewelery</option>
          <option value="women's clothing">women's clothing</option>
        </select>
      </form>
    </div>
  );
}

export default Form