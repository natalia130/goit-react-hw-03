import css from './SearchBox.module.css';
const SearchBox = ({ searchValue, handleChangeSearch }) => {

    return (
        <div className={css["search-container"]}>
            <p className={css["search-text"]}>Find contact by name</p>
            <input className={css["search-input"]} type="text" name="search" placeholder='Search...' value={searchValue} onChange={handleChangeSearch} />
        </div>
    );
};

export default SearchBox;