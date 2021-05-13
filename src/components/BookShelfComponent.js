import React from "react";
import { BookComponent } from "./BookComponent";

/* 
  TODO: 
  
*/

export const BookShelfComponent = ({ books, title }) => {
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
