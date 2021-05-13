import React from "react";
import { BookShelfChangerComponent } from "./BookShelfChangerComponent";

export const BookComponent = ({ title, authors, thumbnail, infoLink }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${thumbnail})`,
            }}
          ></div>
          <BookShelfChangerComponent />
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
