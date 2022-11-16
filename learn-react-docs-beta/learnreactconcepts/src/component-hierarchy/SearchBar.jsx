const SearchBar = () => {
  return (
    <>
      <input type="text" placeholder="search..." />
      <div>
        <input type="checkbox" />
        <label>Only show products in stock</label>
      </div>
    </>
  );
};

export default SearchBar;
