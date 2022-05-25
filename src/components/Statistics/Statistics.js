import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
    
    return (
        <section className={styles.statistics}>
            {title && <h2 className={styles.title}>Upload stats</h2>}
                 
            <ul className={styles.list}>
                {
                    stats.map(document => { 
                        return (
                        <li key={document.id} className={styles.item}>
                            <span className={styles.label}>{document.label}</span>
                            <span className={styles.percentage}>{document.percentage}%</span>
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

Statistics.propTypes = {
    stats: PropTypes.array.isRequired,
    title: PropTypes.string,
}

export default Statistics;