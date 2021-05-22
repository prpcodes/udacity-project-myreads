import React from "react";
import PropTypes from "prop-types";

//API
import * as BooksAPI from "../BooksAPI";

export const BookShelfChangerComponent = ({ value = "none", id }) => {
  function handleChange(e) {
    BooksAPI.update({ id: id }, e.target.value).then(() =>
      window.location.reload(),
    );
  }

  return (
    <div className="book-shelf-changer">
      <select value={value} onChange={handleChange}>
        <option value="move" disabled>
          Move to...
        </option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    </div>
  );
};
BookShelfChangerComponent.propTypes = {
  value: PropTypes.string,
};

export default BookShelfChangerComponent;
