import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
import { bindActionCreators } from 'redux'

class BookList extends Component {
  renderList () {
    return this.props.books.map(book => {
      return (
        <li
          onClick={() => this.props.selectBook(book)}
          key={book.title}
          className='list-group-item'>{book.title}
        </li>
      )
    })
  }

  render () {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    books: state.books
  }
}

// Anything returned from this func will end up as props on BookList container
const mapDispatchToProps = (dispatch) => {
  // The result shoud be passed to all of our redusers
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// Promote BookList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it avaliable as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
