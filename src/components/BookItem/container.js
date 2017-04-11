import { connect } from 'react-redux'
import BookItem from './component'
import { removeBook, toggleBook, editBook } from '../../actions/book'

const mapStateToProps = (state, props) => ({ props })
const mapDispatchToProps = { removeBook, toggleBook, editBook }

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)