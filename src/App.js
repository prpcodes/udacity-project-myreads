import React from 'react'
import './App.css'

import * as BooksAPI from './BooksAPI'
//Components
import { SearchComponent } from "./components/SearchComponent";
import { BookShelfComponent } from "./components/BookShelfComponent";


console.log(BooksAPI.getAll());
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchComponent />
        ) : (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    <BookShelfComponent 
                      books={[null]} 
                      title={"Currently Reading"}
                    />
                    <BookShelfComponent  
                      books={[null]} 
                      title={"Want to Read"}
                    />
                    <BookShelfComponent  
                      books={[null]} 
                      title={"Read"}
                    />                  
                    <BookShelfComponent  
                      books={[null]} 
                      title={"Uncategorized"}
                    />
                </div>
              </div>
              <div className="open-search">
                <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
              </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
