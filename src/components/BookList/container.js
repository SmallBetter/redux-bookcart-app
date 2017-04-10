import { connect } from 'react-redux'
import BookList from './component'

const mapStateToProps = state => ({
  books: state.books
})

export default connect(mapStateToProps)(BookList)