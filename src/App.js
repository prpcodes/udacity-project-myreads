import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

//API
import * as BooksAPI from "./BooksAPI";
//Components
import { BookShelfComponent } from "./components/BookShelfComponent";

console.log(BooksAPI.getAll([1]));

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: BooksAPI.getAll(),
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
