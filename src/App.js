import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

//API
import * as BooksAPI from "./BooksAPI";
//Components
import { BookShelfComponent } from "./components/BookShelfComponent";

console.log();

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      currentBooks: [],
      wantBooks: [],
      readBooks: [],
    };
  }

  componentDidMount() {
    Promise.resolve(BooksAPI.getAll()).then((books) => {
      this.setState({
        books,
      });
      console.log(this.state.books);
    });
  }

  render() {
    return (
      <div className="app">
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <BookShelfComponent
                books={this.state.books}
                title={"Currently Reading"}
              />
              <BookShelfComponent
                books={this.state.books}
                title={"Want to Read"}
              />
              <BookShelfComponent books={this.state.books} title={"Read"} />
            </div>
          </div>
          <div className="open-search">
            <Link className="button" to="/search">
              Add a book
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default BooksApp;
