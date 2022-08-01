import { useState } from 'react';
import styles from './Card.module.scss';
import Front from './Front';
import Back from './Back';

const Card = (props) => {

    const { 
        name,
        tagline,
        first_brewed,
        description,
        image_url,
        abv     
    } = props.beer;

    const [flipped, setFlip] = useState(false);

    const toggleCard = () => {
        flipped == true ? setFlip(false) : setFlip(true);
    }

    return (
        <div className={styles.card} onClick={toggleCard}>
            {flipped == true ? 
            <Back name={name} tagline={tagline} description={description} first_brewed={first_brewed}/> : 
            <Front name={name} img={image_url} abv={abv}/>
            }   
        </div>
    )
}

export default Card;