import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

export default function RestaurantsMenu() {
  const params = useParams();
  const { id } = params;
  const restaurant=useRestaurant(id);
  // const [restaurant, setRestauraunt] = useState(null);
  // async function getRestaurantInfo() {
  //   const data = await fetch(
  //     `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
  //   );
  //   const json = await data.json();
  //   console.log(json.data.cards[0].card.card.info); //restraunt array
  //   console.log(
  //     json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card.card
  //       .itemCards
  //   ); // menu array
  //   setRestauraunt(json.data);
  // }
  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt id: {id}</h1>
        <h2>{restaurant?.cards[0].card.card.info.name}</h2>
        <img
          src={
            IMG_CDN_URL + restaurant?.cards[0].card.card.info.cloudinaryImageId
          }
        />
        <h3>{restaurant?.cards[0].card.card.info.areaName}</h3>
        <h3>{restaurant?.cards[0].card.card.info.city}</h3>
        <h3>{restaurant?.cards[0].card.card.info.avgRating} stars</h3>
        <h3>{restaurant?.cards[0].card.card.info.costForTwoMessage}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(
            restaurant.cards[2].groupedCard.cardGroupMap.REGULAR.cards[3].card
              .card.itemCards
          ).map((item) => (
            <li key={item.card.info.id}>{item.card.info.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
