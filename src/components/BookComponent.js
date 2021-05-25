import React from "react";
import { BookShelfChangerComponent } from "./BookShelfChangerComponent";

export const BookComponent = ({ id, title, authors, imageLinks, shelf }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${imageLinks})`,
            }}
          ></div>
          <BookShelfChangerComponent id={id} value={shelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.map(function (author, index) {
            return <span key={index}>{(index ? ", " : "") + author}</span>;
          })}
        </div>
      </div>
    </li>
  );
};
