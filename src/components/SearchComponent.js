import React from "react";
import { Link } from "react-router-dom";
// API
import * as BooksAPI from "../BooksAPI";

//Components
import { BookComponent } from "./BookComponent";

/*
  NOTES: The search from BooksAPI is limited to a particular set of search terms.
  You can find these search terms here:
  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
  you don't find a specific author or title. Every search is limited by search terms.
*/

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      getBooks: [],
      value: "",
    };
  }

  componentDidMount() {
    this.getBooks();
    console.warn(
      "NOTE: The search from BooksAPI is limited to a particular set of search terms. You can find these search terms here: https://raw.githubusercontent.com/prpwien/udacity-project-myreads/main/SEARCH_TERMS.md So, don't worry if you don't find a specific author or title. Every search is limited by search terms.",
    );
  }

  getBooks() {
    BooksAPI.getAll().then((res) => {
      let getBooks = [];
      res.forEach((book) => {
        getBooks.push({
          id: book.id,
          title: book.title,
          authors: book.authors || [],
          image: book.imageLinks && book.imageLinks.thumbnail,
          shelf: book.shelf,
        });
      });
      this.setState({ getBooks });
    });
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    let getBooks = this.state.getBooks;
    BooksAPI.search(e.target.value).then((res) => {
      if (Array.isArray(res)) {
        if (res && res.length > 0) {
          const matchingBooks = res.map(function (book) {
            let shelvedBooks = getBooks.find((b) => book.id === b.id);
            book.shelf = shelvedBooks ? shelvedBooks.shelf : "none";
            return {
              id: book.id,
              title: book.title,
              authors: book.authors || [],
              imageLinks:
                book.imageLinks &&
                book.imageLinks.thumbnail &&
                book.imageLinks.smallThumbnail,
              shelf: book.shelf,
            };
          });
          this.setState({ books: matchingBooks });
        } else {
          this.setState({ books: [] });
        }
      } else {
        this.setState({ books: [] });
      }
    });
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to={"/"} className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.value || ""}
              onChange={this.handleChange.bind(this)}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.books.map((book) => {
              return <BookComponent key={book.id} {...book} />;
            })}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchComponent;
