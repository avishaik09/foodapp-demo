import { IMG_CDN_URL } from "../config";

const FoodItems = ({  name, description, price, imageId }) => {
  console.log("food item loaded");
  return (
    <div className="  w-56 h-[470px] p-2 m-2 shadow-lg bg-slate-100 ">
      <img src={IMG_CDN_URL + imageId} alt="burger" />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4>Rs.{price / 100} </h4>
      
    </div>
  );
};

export default FoodItems;
