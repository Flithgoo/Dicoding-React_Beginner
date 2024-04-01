import React from "react";

function SearchBar({ onSearchChange, searchTerm }) {
  return (
    <div className="search-bar mt-3">
      <div className="p-1 px-2 bg-light rounded rounded-pill shadow-sm mb-4">
        <div className="input-group">
          <input
            onChange={(event) => onSearchChange(event.target.value)}
            type="search"
            placeholder="Cari judul catatan"
            aria-describedby="button-addon1"
            value={searchTerm}
            className="form-control border-0 bg-light fs-5"
          />
          <div className="input-group-append">
            <button
              id="button-addon1"
              type="button"
              className="btn btn-link text-primary fs-5"
            >
              <i className="bi bi-search"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
