import SearchIcon from '@mui/icons-material/Search';


const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <SearchIcon className='search-icon' size='1.3em'/>
            <input 
                type='text' 
                placeholder='Type to search...' 
                onChange={(event)=>handleSearchNote(event.target.value)}
            />
        </div>
    )
}

export default Search;