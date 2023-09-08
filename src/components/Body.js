import { useEffect, useState,useContext } from "react";
import { restaurantsList } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {filterData }from "../utils/common"
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

// import { Image, Shimmer } from "react-shimmer";
// import SearchBox from "./SearchBox";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const {user,setUser} = useContext(UserContext)
 

  const handleSearch = () => {
    const data = filterData(search, allRestaurants);
    setFilteredRestaurants(data);
  };
  async function getData() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setAllRestaurants(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilteredRestaurants(
      json.data.cards[5]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  }
  useEffect(() => {
    getData();
  }, []);


  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴 Offline, please check your internet connection!!</h1>;
  }
  // conditional rendering
  // shimmerUI

  //early return (not render components)
  if (!allRestaurants) return null;

  return allRestaurants.length === 0 ? (
    <Shimmer/>
    // <Image
    //   src="https://source.unsplash.com/random/800x600"
    //   fallback={<Shimmer width={800} height={600} />}
    // />
  ) : (
    <>
      <div className="search-container p-5 bg-pink-100 my-5 ">
        <input
          className="focus:bg-cyan-100 m2 px-2"
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="search-btn p-2 m-2 bg-purple-300 rounded-md text-white hover:bg-violet-700" onClick={handleSearch}>
          Search
        </button>
        <input type="text" value={user.name} onChange={(e)=>setUser({name:e.target.value})}/>
      </div>

      <div className="flex flex-wrap">
        {/* <RestrauntCard restaurants={restaurants[0]} /> */}
        {/* <RestrauntCard {...restaurants[0].info} /> */}

        {/* {filteredRestaurants.length === 0 ? (
          <h1>No matching restaurant found!!</h1>
        ) : ( */}
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link style={{textDecoration: 'none'}}
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} user={user}/>
            </Link>
          );
        })}
        {/* )} */}
      </div>
    </>
  );
};

export default Body;
