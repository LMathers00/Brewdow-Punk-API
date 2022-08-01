import Card from '../Card';
import styles from './CardList.scss'

const CardList = (props) => {

    const { beers, listOrder } = props;
    let beerArray = [];

    if (listOrder !== '') {
        let keyArray;
        let orderedArray = [];

        const mapNameArr = (arr) => {
            arr.map((key) => {
                beers.filter((beer) => {
                    if (beer.name == key) {
                        return orderedArray.push(beer);
                    }
                });
                return orderedArray
            })
        }

        const formatDate = (beer) => {
            const beeryear = beer.first_brewed.split("/")[1];
            const beermonth = beer.first_brewed.split("/")[0];
            beer.formattedDate = `${beeryear} / ${beermonth}`
            return beer;
        }

        const mapDateArr = (arr) => {
            arr.map((key) => {
                beers.filter((beer) => {
                    if (beer.name == key.name) {
                        return orderedArray.push(beer);
                    }
                });
                return orderedArray
            })
        }

        if (listOrder == 'a-z'){
            keyArray = (beers.map(beer => beer.name))
                .sort((beer1, beer2) => {
                if (beer1 < beer2 ) {
                    return -1; 
                } else if (beer1 > beer2) {
                    return 1;
                } else {
                    return 0;
                }
            });
            mapNameArr(keyArray)
        } else if (listOrder == 'z-a') {
            keyArray = (beers.map(beer => beer.name))
                .sort((beer1, beer2) => {
                if (beer2 < beer1 ) {
                    return -1; 
                } else if (beer2 > beer1) {
                    return 1;
                } else {
                    return 0;
                }
            });
            mapNameArr(keyArray)
        } else if (listOrder == 'old-new') {
            keyArray = (beers.map(beer => formatDate(beer))
                .sort((beer1, beer2) => {
                if (beer1.formattedDate < beer2.formattedDate ) {
                    return -1; 
                } else if (beer1.formattedDate > beer2.formattedDate ) {
                    return 1;
                } else {
                    return 0;
                }
            }))
            mapDateArr(keyArray)
        } else if (listOrder == 'new-old') {
            keyArray = (beers.map(beer => formatDate(beer))
                .sort((beer1, beer2) => {
                if (beer1.formattedDate > beer2.formattedDate ) {
                    return -1; 
                } else if (beer1.formattedDate < beer2.formattedDate ) {
                    return 1;
                } else {
                    return 0;
                }
            }))
            mapDateArr(keyArray)
        } else {
            return []
        }
        beerArray = orderedArray;
    } else {
        beerArray = beers;
    }
    
    const getCardJsx = (beer) => (
        <Card key={beer.id} beer={beer} />
    );
        
    return (
        <div className={`cardList ${styles.cardList}`}>
            {beerArray.map(getCardJsx)}
        </div>
    )
}

export default CardList;