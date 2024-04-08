const SearchBar = () => {
  return (
    <div className="w-full h-[44px] bg-[#34345B] rounded-[25px] p-1 flex justify-between items-center">
      <div className="pl-6 flex gap-2 items-center">
        <img src="/assets/icons/searchIcon.png" alt="searchIcon" />
        <input
          type="text"
          className="bg-transparent border-none focus:outline-none"
          placeholder="Search"
        />
      </div>
      <button className="rounded-[25px] h-full w-[120px] bg-gradient-to-r from-[#AD07C9] to-[#6335E5]">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
