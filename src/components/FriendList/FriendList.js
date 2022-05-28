import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => { 
  return (  
    <ul className={styles.list}>
        {
            friends.map(({id, isOnline, avatar, name}) => { 
                return (
                    <li key={id} className={styles.item}>
                        <span className={isOnline ? styles.status : styles.statusRed}>
                            {isOnline}
                        </span>
                        <img className={styles.avatar} src={avatar} alt={name} width="48" />
                        <p className={styles.name}>{name}</p>
                    </li>
                )
            })
        }
    </ul>)
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired
    })),
}

export default FriendList;