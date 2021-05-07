import React, { Component } from "react";
import { BookComponent } from "./BookComponent";

/* 
  TODO: 
  1. Passing down props for the title
*/
export class BookShelfComponent extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {/* DATA: book-title, book-author, book-cover, CATEGORY */}
            <BookComponent
              book-title={null}
              book-author={null}
              book-cover={null}
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelfComponent;
