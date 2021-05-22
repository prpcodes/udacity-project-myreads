import React from "react";
import { BookShelfChangerComponent } from "./BookShelfChangerComponent";

export const BookComponent = ({ id, title, authors, image }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${image})`,
            }}
          ></div>
          <BookShelfChangerComponent id={id} />
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
