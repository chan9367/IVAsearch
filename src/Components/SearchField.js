import React from "react";


const SearchField = ({value, onChange, onSearch}) => {
  return(
    <div className = "d-flex mt-4">
    
    <div className = "ml-auto">
      <input className = "mr-2 " value={value} onChange={onChange} />
      <button className = "btn btn-outline-danger" onClick={onSearch}>Search</button>
    </div>
     </div>
  );
};
export default SearchField;