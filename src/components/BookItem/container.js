import { connect } from 'react-redux'
import BookItem from './component'

const mapStateToProps = (state, props) => ({ ...props })


export default connect(mapStateToProps)(BookItem)