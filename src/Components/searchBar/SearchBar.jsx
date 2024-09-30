import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div>
      <div className="relative flex justify-center">
        <IoSearch
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        />
        <input
          type="text"
          placeholder="Search here"
          className="bg-gray-200 placeholder-gray-400 rounded-lg pl-10 pr-4 py-3 w-full sm:w-60 md:w-72 lg:w-96 outline-none text-black"
        />
      </div>
    </div>
  );
}

export default SearchBar;
