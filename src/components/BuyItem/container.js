import { connect } from 'react-redux'
import BuyItem from './component'

const mapStateToProps = (state, props) => ({ props })

export default connect(mapStateToProps)(BuyItem)