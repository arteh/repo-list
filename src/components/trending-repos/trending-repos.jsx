import React, { useEffect, useState } from "react";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";

import "../../components/list.css";

export const TrendingRepos = () => {
  const [repoList, setRepoList] = useState([]);
  const [faveList, setFaveList] = useState([]);

  // Get date 7 days before now
  const sevenDaysAgo = new Date(
    Date.now() - 7 * 24 * 60 * 60 * 1000
  ).toISOString();
  const formattedDate = sevenDaysAgo.substring(0, sevenDaysAgo.indexOf("T"));

  // Get data from github
  useEffect(() => {
    const url = `https://api.github.com/search/repositories?q=created:%3E${formattedDate}&sort=stars&order=desc`;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setRepoList(json.items);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [formattedDate]);

  // Get favorite list from local storage
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

  const handleFavorite = (item) => {
    localStorage.setItem(`favorite-${item.id}`, JSON.stringify(item));
  };

  return (
    <div>
      <h1>Most starred github repositories in the last 7 days</h1>

      {repoList ? (
        repoList?.map((item, index) => (
          <div className="item">
            <div className="name">{item?.name}</div>
            <div className="description">{item?.description}</div>
            <div className="stars">
              {item?.stargazers_count} <AiFillStar fill="#FFE046" />
            </div>
            <div className="favorite-btn">
              <button type="button" onClick={() => handleFavorite(item)}>
                {faveList.find((favorite) => favorite.id === item.id) ? (
                  <AiFillHeart fill="#EF8354" />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
