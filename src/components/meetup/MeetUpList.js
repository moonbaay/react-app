import classes from "./MeetUpList.module.css";
import MeetupItem from "./MeetUpItem";
function MeetupList(props) {
  return (
    <div className={classes.list}>
      {props.DATA.map((item) => (
        <MeetupItem
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          address={item.address}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default MeetupList;
