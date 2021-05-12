import React from "react";
import { BookShelfChangerComponent } from "./BookShelfChangerComponent";

/* 
  TODO: 
  1. Get data for the books
*/

export const BookComponent = ({ title, authors, thumbnail, infoLink }) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            oncClick={() => window.open("{infoLink}", "_blank")}
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
          {/*TODO: ADD AUTHOR SPACING*/}
          {authors.map((author) => {
            return `${author} `;
          })}
        </div>
      </div>
    </li>
  );
};
