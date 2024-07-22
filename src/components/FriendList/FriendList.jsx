import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css"

const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, name, avatar, isOnline }) => {
        return (
          <li key={id}>
            <FriendListItem name={name} avatar={avatar} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
};

export default FriendList;
