import { connect } from 'react-redux'
import App from './component'

export const mapStateToProps = state => ({
  item: state.item
})

export default connect(mapStateToProps)(App)