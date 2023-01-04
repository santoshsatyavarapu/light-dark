// Write your code here
import {Component} from 'react'

import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Dark', status: 'Light Mode', className: 'sub-container-1'}

  changeMode = () => {
    const {mode} = this.state

    if (mode === 'Dark') {
      this.setState({
        mode: 'Light',
        status: 'Dark Mode',
        className: 'sub-container-2',
      })
    } else {
      this.setState({
        mode: 'Dark',
        status: 'Light Mode',
        className: 'sub-container-1',
      })
    }
  }

  render() {
    const {status, className} = this.state
    return (
      <div className="container">
        <div className={className}>
          <h1 className="heading">Click to change Mode</h1>
          <button type="button" onClick={this.changeMode}>
            {status}
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
