const SearchBar = () => {
  return (
    <div className="w-full h-[44px] bg-[#34345B] rounded-[25px] p-1 flex justify-between items-center">
      <div className="pl-6 flex gap-2 items-center min-w-[75%]">
        <img src="/assets/icons/searchIcon.png" alt="searchIcon" />
        <input
          type="text"
          className="bg-transparent border-none focus:outline-none w-full"
          placeholder="Search"
        />
      </div>
      <div className="w-[25%] rounded-[25px] h-full flex justify-end">
        <button className="rounded-[25px] h-full w-[120px] bg-gradient-to-r from-[#AD07C9] to-[#6335E5]">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
