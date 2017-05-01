import { connect } from 'react-redux'
import App from './component'

export const mapStateToProps = state => ({
  pages: state.pages
})

export default connect(mapStateToProps)(App)