import styles from './Order.scss';

const Order = (props) => {
    
    const { updateOrder } = props; 

    const orderChoice = (event) => {
        return updateOrder(event.target.value);
    }

    return (
        <div className={styles.order}>
            <h4>Order...</h4>
            <button value='a-z' onClick={orderChoice}>Alphabetical; A-Z</button>
            <button value='z-a' onClick={orderChoice}>Alphabetical; Z-A</button>
            <button value='old-new' onClick={orderChoice}>Brew date; oldest - newest</button>
            <button value='new-old' onClick={orderChoice}>Brew date; newest - oldest</button>
        </div>
    )
}

export default Order;