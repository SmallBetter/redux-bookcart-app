import { connect } from 'react-redux'
import BookItem from './component'
import { removeBook } from '../../actions/book'

const mapStateToProps = (state, props) => ({ ...props })
const mapDispatchToProps = { removeBook }

export default connect(mapStateToProps, mapDispatchToProps)(BookItem)