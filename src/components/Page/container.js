import { connect } from 'react-redux'
import SearchTodo from './component'
import { showItem } from '../../actions/item'

const mapDispatchToProps = { showItem }


export default connect(null, mapDispatchToProps)(SearchTodo)