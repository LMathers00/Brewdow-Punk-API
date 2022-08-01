export const getBeers = () => {
    return fetch(`https://api.punkapi.com/v2/beers`).then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        })
}

export const searchBeers = (searchText) => {
    if (searchText.length > 0 ) {
        return fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchText}`).then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        })
    } else {
        return [];
    } 
}

export const findStrong = () => {
    return fetch(`https://api.punkapi.com/v2/beers?abv_gt=6`).then((response) => {
            return response.json();
        }).then((response) => {
            return response;
        })
}
