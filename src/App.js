import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { BookShelfComponent } from "./components/BookShelfComponent";
import "./App.css";

//API
import * as BooksAPI from "./BooksAPI";

class BooksApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: [],
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    BooksAPI.getAll().then((returnedBooks) => {
      let currentlyReading = [];
      let wantToRead = [];
      let read = [];
      returnedBooks.forEach((book) => {
        if (book.shelf === "currentlyReading") {
          currentlyReading.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            imageLinks:
              book.imageLinks &&
              book.imageLinks.thumbnail &&
              book.imageLinks.smallThumbnail,
            shelf: book.shelf,
          });
        }
        if (book.shelf === "wantToRead") {
          wantToRead.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            imageLinks:
              book.imageLinks &&
              book.imageLinks.thumbnail &&
              book.imageLinks.smallThumbnail,
            shelf: book.shelf,
          });
        }
        if (book.shelf === "read") {
          read.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            imageLinks:
              book.imageLinks &&
              book.imageLinks.thumbnail &&
              book.imageLinks.smallThumbnail,
            shelf: book.shelf,
          });
        }
      });
      this.setState({ currentlyReading, wantToRead, read });
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
            <BookShelfComponent
              title={"Currently Reading"}
              books={this.state.currentlyReading}
            />
            <BookShelfComponent
              title={"Want To Read"}
              books={this.state.wantToRead}
            />
            <BookShelfComponent
              title={"Done Reading"}
              books={this.state.read}
            />
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

BooksApp.propTypes = {
  currentlyReading: PropTypes.array,
  wantToRead: PropTypes.array,
  read: PropTypes.array,
};

export default BooksApp;
