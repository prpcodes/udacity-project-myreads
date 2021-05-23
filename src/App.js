import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

//API
import * as BooksAPI from "./BooksAPI";

//Components
import { BookShelfComponent } from "./components/BookShelfComponent";

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
            image: book.imageLinks && book.imageLinks.thumbnail,
            shelf: book.shelf,
          });
        }
        if (book.shelf === "wantToRead") {
          wantToRead.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: book.imageLinks && book.imageLinks.thumbnail,
            shelf: book.shelf,
          });
        }
        if (book.shelf === "read") {
          read.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: book.imageLinks && book.imageLinks.thumbnail,
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

export default BooksApp;
