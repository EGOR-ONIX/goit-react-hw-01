import css from "./FriendListItem.module.css";
import clsx from "clsx";

const FriendListItem = ({ name, avatar, isOnline }) => {
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={clsx(css.status, isOnline && css.online)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};

export default FriendListItem;
