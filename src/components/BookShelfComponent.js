import React, { Component } from "react";
import { BookComponent } from "./BookComponent";

/* 
  TODO: 
  - [ ] passing down props into the <BookComponent /> 
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
              bookTitle={"Ender's Game"}
              bookAuthors={"Orson Scott Card"}
              bookCover={
                "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api"
              }
            />
          </ol>
        </div>
      </div>
    );
  }
}

export default BookShelfComponent;
