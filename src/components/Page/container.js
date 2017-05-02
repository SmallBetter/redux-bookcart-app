import { connect } from 'react-redux'
import SearchTodo from './component'
import { toggerHome } from '../../actions/pages'
import { showItem } from '../../actions/item'

const mapDispatchToProps = { toggerHome, showItem }


export default connect(null, mapDispatchToProps)(SearchTodo)