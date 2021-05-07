import React, { Component } from "react";
import { BookShelfChangerComponent } from "./BookShelfChangerComponent";

/* 
  TODO: 
  1. Get data for the books
*/

export class BookComponent extends Component {
  render() {
    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 192,
                backgroundImage: `url(${this.props.bookCover})`,
              }}
            ></div>
            <BookShelfChangerComponent />
          </div>
          <div className="book-title">{this.props.bookTitle}</div>
          <div className="book-authors">{this.props.bookAuthors}</div>
        </div>
      </li>
    );
  }
}

export default BookComponent;
