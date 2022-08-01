import styles from './Front.module.scss'

const Front = (props) => {

    const {name, img, abv} = props;

    return (
        <div className={styles.front}>
            <div className={styles.imgContainer}><img src={img}/></div>
            <div className={styles.textContainer}>
                <h2 className={styles.beerName}>{name}</h2>
                <h3>ABV {abv}</h3>
            </div>
        </div>
    )
}

export default Front;