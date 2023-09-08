
import  {IMG_CDN_URL} from "../config"
import { useContext } from "react";
import UserContext from "../utils/UserContext";


const RestrauntCard = ({name,cuisines,avgRating,cloudinaryImageId}) => {
const {user}=useContext(UserContext);

    return (
      
      <div className="  w-56 h-[470px] p-2 m-2 shadow-lg bg-slate-100 ">
      
        <img
          src={
            IMG_CDN_URL +
            cloudinaryImageId
          }
          alt="burger"
        />
        <h2 className="font-bold text-xl">{name}</h2>
        <h3>{cuisines.join(" , ")}</h3>
        <h4>{avgRating} Stars</h4>
        <h4>{user.name} email:({user.email})</h4>
      </div>
    );
  };

  export default RestrauntCard;