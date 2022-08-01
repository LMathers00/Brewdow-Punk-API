import styles from './SearchBar.scss';

const SearchBar = (props) => {
    const { updateSearchText, updateAbv } = props; 
    
    return (
        <div className={styles.searchBar} >
            <h4>Filter...</h4>
            <input type='text' placeholder='search beers' onInput={event => updateSearchText(event.target.value)} />
            <button onClick={event => updateAbv(event)}>High ABV (&gt; 6.0%)</button>
        </div>
    )
}

export default SearchBar;