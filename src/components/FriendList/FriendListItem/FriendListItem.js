import PropTypes from 'prop-types';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
                <div className={styles.item}>
                    <span className={isOnline ? styles.status : styles.statusRed}>
                        {isOnline}
                    </span>
                    <img className={styles.avatar} src={avatar} alt={name} width="48" />
                    <p className={styles.name}>{name}</p>
                </div>
            )
        }

FriendListItem.propTypes = {
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
}

export default FriendListItem;