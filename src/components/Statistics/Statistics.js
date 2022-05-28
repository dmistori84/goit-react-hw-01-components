import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
    
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>Upload stats</h2>}
                 
            <ul className={styles.list}>
                {
                    stats.map(({id, label, percentage}) => { 
                        return (
                        <li key={id} className={styles.item}>
                            <span className={styles.label}>{label}</span>
                            <span className={styles.percentage}>{percentage}%</span>
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        label: PropTypes.string,
        percentage: PropTypes.number,
    })),
    title: PropTypes.string,
}

export default Statistics;