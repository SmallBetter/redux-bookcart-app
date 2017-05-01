import { connect } from 'react-redux'
import SearchTodo from './component'
import { toggerHome } from '../../actions/pages'

const mapDispatchToProps = { toggerHome }


export default connect(null, mapDispatchToProps)(SearchTodo)