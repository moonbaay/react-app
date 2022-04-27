import classes from "./MeetUpItem.module.css"
function MeetupItem(props){
    return (
      <div className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>D{props.description}</p>
        </div>
        <div className={classes.action}>
          <button>Add to Favorites</button>
        </div>
      </div>
    );
}

export default MeetupItem