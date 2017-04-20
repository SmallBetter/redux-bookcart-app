import { connect } from 'react-redux'
import TodoInput from './component'
import { addBook } from '../../actions/book'

export const mapDispatchToProps = { addBook }

export default connect(null, mapDispatchToProps)(TodoInput)