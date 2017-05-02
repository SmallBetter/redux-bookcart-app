import { connect } from 'react-redux'
import BookList from './component'

export const mapStateToProps = state => ({
  books: state.books,
  searchs: state.searchs,
  item: state.item
})

export default connect(mapStateToProps)(BookList)