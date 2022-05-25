import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => { 
  return (  
    <ul className={styles.list}>
        {
            friends.map(friend => { 
                return (
                    <li key={friend.id} className={styles.item}>
                        <span className={friend.isOnline ? styles.status : styles.statusRed}>
                            {friend.isOnline}
                        </span>
                        <img className={styles.avatar} src={friend.avatar} alt={friend.name} width="48" />
                        <p className={styles.name}>{friend.name}</p>
                    </li>
                )
            })
        }
    </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.array,
}

export default FriendList;