import { connect } from 'react-redux'
import BookItem from './component'
import { removeBook, toggleBook } from '../../actions/book'

const mapStateToProps = (state, props) => ({ props })
const mapDispatchToProps = { removeBook, toggleBook }

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)