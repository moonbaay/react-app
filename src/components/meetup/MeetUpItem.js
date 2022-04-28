import { useContext } from "react";

import classes from "./MeetUpItem.module.css";
import Card from "../ui/Card";
import FavoritesContext from "../../store/favorites-context";

function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext)

  const itemIsfavorite = favoriteCtx.itemIsfavorite(props.id)

  function toggleFavoritesStatusHandler(){
    if(itemIsfavorite){
      favoriteCtx.removeFavorite(props.id)
    }else{
      favoriteCtx.addFavorite({
        id:props.id,
        title:props.title,
        address:props.address,
        image:props.image,
        description:props.description
      })
    }
  }
  return (
    <div className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>D{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>{itemIsfavorite ? 'Remove from favorites' : 'To favorites'}</button>
        </div>
      </Card>
    </div>
  );
}

export default MeetupItem;
