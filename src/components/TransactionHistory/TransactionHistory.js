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
            {items.map(({id, type, amount, currency}) => { 
            return (
                    <tbody key={id}>
                            <tr className={styles.tr}>
                                <td className={styles.td}>{type}</td>
                                <td className={styles.td}>{amount}</td>
                                <td className={styles.td}>{currency}</td>
                            </tr>
                    </tbody>)})}
                </table>       
    )
}

TransactionHistory.protoTypes = {
    items: PropTypes.array.isRequired
}

export default TransactionHistory;

