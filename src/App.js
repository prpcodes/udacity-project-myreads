import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

//API
import * as BooksAPI from "./BooksAPI";
//Components
import { BookShelfComponent } from "./components/BookShelfComponent";

console.log(BooksAPI.getAll());

class BooksApp extends React.Component {
  state = {
    books: BooksAPI.getAll(),
    currentlyReading: null,
    wantedToRead: null,
    read: null,
    none: null,
  };
  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelfComponent books={[null]} title={"Currently Reading"} />
              <BookShelfComponent books={[null]} title={"Want to Read"} />
              <BookShelfComponent books={[null]} title={"Read"} />
            </div>
          </div>
          <div className="open-search">
            <Link className="button" to="/search">Add a book</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
