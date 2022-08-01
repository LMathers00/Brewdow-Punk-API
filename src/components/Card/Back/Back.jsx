import styles from './Back.scss'

const Back = (props) => {

    const {name, tagline, description, first_brewed} = props;

    return (
        <div className={styles.back}>
            <div>
                <h2>{name}</h2>
                <h4>"{tagline}"</h4>
                <p className={styles.beerText}>{description}</p>
            </div>
            <p className={styles.brewDate}>First brewed... {first_brewed}</p>
        </div>
    )
}

export default Back;