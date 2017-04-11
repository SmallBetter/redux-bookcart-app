import { connect } from 'react-redux'
import GrandTotalBook from './component'

const mapStateToProps = state => ({
  books: state.books
})

export default connect(mapStateToProps)(GrandTotalBook)