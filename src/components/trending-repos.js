import React from "react";
import { AiOutlineHeart, AiFillHeart, AiOutlineStar } from "react-icons/ai";
import "./trending-repos.css";

export class TrendingRepos extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isDataReady: false,
      list: [],
      favoritesList: [],
    };
  }

  componentDidMount() {
      // move to helpers
    const sevenDaysAgo = new Date(
      Date.now() - 7 * 24 * 60 * 60 * 1000
    ).toISOString();
    const formattedDate = sevenDaysAgo.substring(0, sevenDaysAgo.indexOf("T"));

    fetch(
      `https://api.github.com/search/repositories?q=created:%3E${formattedDate}&sort=stars&order=desc`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          list: json.items,
          isDataReady: true,
        });
      });
  }

  toggleFavorite = (item) => {
    console.log("item", item);

    const { favoritesList } = this.state;

    this.setState((prevState) => ({
      favoritesList: [...favoritesList, item],
    }));

    // TODO  we also need to do unfavourite
  };

  render() {
    const { isDataReady, list, favoritesList } = this.state;

    console.log("list in state", list);
    console.log("favoriteslist in state", favoritesList);

    return (
      <div>
        <h1 className="title">Most starred respoitories in the last 7 days</h1>
        {isDataReady ? (
          list?.map((item, index) => (
            <div className="item">
              <span className="item-info">{item?.name}</span>
              <span className="item-info">{item?.description}</span>
              <span className="item-info">{item?.stargazers_count} <AiOutlineStar /></span>
              <span className="favorite">
              <button
                type="button"
                value={item.id}
                onClick={() => this.toggleFavorite(item)}
              >
                {favoritesList.find((favorite) => favorite.id === item.id) ? (
                  <AiFillHeart fill="#E65F5C" />
                ) : (
                  <AiOutlineHeart />
                )}
              </button>
              </span>
     
            </div>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    );
  }
}

// change to functional comp
// show the favourites in a different page
