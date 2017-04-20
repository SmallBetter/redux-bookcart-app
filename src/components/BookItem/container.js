import { connect } from 'react-redux'
import BookItem from './component'
import { removeBook, toggleBook, editBook, addBuyBook, buyBook } from '../../actions/book'

export const mapStateToProps = (_, props) => props
export const mapDispatchToProps = { removeBook, toggleBook, editBook, addBuyBook, buyBook }

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)