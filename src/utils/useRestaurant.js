import { useState,useEffect } from "react";
import { FETCH_MENU } from "../config";

const useRestaurant = (id) => {
    const [restaurant, setRestauraunt] = useState(null);
    async function getRestaurantInfo() {
        const data = await fetch(FETCH_MENU+id);
        const json = await data.json();
        console.log(json.data.cards[0].card.card.info); //restraunt array
        console.log(
          json.data.cards[2].groupedCard.cardGroupMap.REGULAR .cards[3].card.card
          .itemCards
        ); // menu array
        setRestauraunt(json.data);
      }
      useEffect(() => {
        getRestaurantInfo();
      }, []);
return restaurant
};

export default useRestaurant;
