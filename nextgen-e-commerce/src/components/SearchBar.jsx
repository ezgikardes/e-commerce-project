function SearchBar() {
    return (
        <form className="">
            <input 
            className="rounded-full py-1 px-4 w-[15rem] focus:w-[18rem]
             transition-all duration-300 focus:outline-none focus:ring"
             type="search" placeholder="Search here"/>
        </form>
    )
}

export default SearchBar
