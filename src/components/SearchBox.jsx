import React from 'react'

const SearchBox = (props) => {
    const { searchValue } = props
    return (
        <div className='col col-sm-4'>
            <input
                className="form-control"
                type="text"
                placeholder='Type to search....'
                value={searchValue}
                onChange={(e) => { props.setSearchValue(e.target.value) }}
            />
        </div>
    )
}

export default SearchBox