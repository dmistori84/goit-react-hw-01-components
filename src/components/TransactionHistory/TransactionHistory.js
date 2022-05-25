import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => { 
    return (
                <table className={styles.transactionHistory}>
                    <thead>
                        <tr className={styles.tr}>
                            <th className={styles.th}>Type</th>
                            <th className={styles.th}>Amount</th>
                            <th className={styles.th}>Currency</th>
                        </tr>
                    </thead>
            {items.map(item => { 
            return (
                    <tbody key={item.id}>
                            <tr className={styles.tr}>
                                <td className={styles.td}>{item.type}</td>
                                <td className={styles.td}>{item.amount}</td>
                                <td className={styles.td}>{item.currency}</td>
                            </tr>
                    </tbody>)})}
                </table>       
    )
}

TransactionHistory.protoTypes = {
    items: PropTypes.array.isRequired
}

export default TransactionHistory;

