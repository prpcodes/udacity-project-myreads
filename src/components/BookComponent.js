import React from "react";
import { BookShelfChangerComponent } from "./BookShelfChangerComponent";

export const BookComponent = ({
  title,
  authors,
  imageLinks,
  infoLink,
  id,
  shelf,
}) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${imageLinks.thumbnail})`,
            }}
          ></div>
          <BookShelfChangerComponent id={id} shelf={shelf} />
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.map(function (author, index) {
            return (
              <span key={`demo_snap_${index}`}>
                {(index ? ", " : "") + author}
              </span>
            );
          })}
        </div>
      </div>
    </li>
  );
};
