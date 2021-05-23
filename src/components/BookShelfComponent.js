import React from "react";
import PropTypes from "prop-types";
import { BookComponent } from "./BookComponent";

export const BookShelfComponent = ({ title, books }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => {
            return <BookComponent key={book.id} {...book} />;
          })}
        </ol>
      </div>
    </div>
  );
};

BookShelfComponent.propTypes = {
  title: PropTypes.string,
  books: PropTypes.array,
};
