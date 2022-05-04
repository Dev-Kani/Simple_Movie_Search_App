const SearchBox = (props) => {
    const { searchValue } = props
    return (
        <div className='search-box'>

            <input
                type="text"
                placeholder='Type to search....'
                value={searchValue}
                onChange={(e) => { props.setSearchValue(e.target.value) }}
            />
        </div>
    )
}

export default SearchBox