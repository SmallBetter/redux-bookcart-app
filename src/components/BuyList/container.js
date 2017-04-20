import { connect } from 'react-redux'
import BuyList from './component'

const mapStateToProps = state => ({
  buyitem: state.buyitem
})

export default connect(mapStateToProps)(BuyList)