import React, { useState, useEffect } from "react";
import { AiFillHeart, AiOutlineStar } from "react-icons/ai";

import "../../components/list.css";

export const FavoritesList = () => {
  const [faveList, setFaveList] = useState([]);

  useEffect(() => {
    let items = [],
      keys = Object.keys(localStorage).filter((key) =>
        key.includes("favorite")
      ),
      i = keys.length;
    while (i--) {
      items.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    if (items) {
      setFaveList(items);
    }
  }, []);

  return (
    <div>
      <h1>My favorite github repositories</h1>

      {faveList
        ? faveList?.map((item, index) => (
            <div className="item">
              <div className="name">{item?.name}</div>
              <div className="description">{item?.description}</div>
              <div className="stars">
                {item?.stargazers_count} <AiOutlineStar />
              </div>

              <div className="favorite-btn">
                <button type="button">
                  <AiFillHeart fill="#EF8354" />
                </button>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};
