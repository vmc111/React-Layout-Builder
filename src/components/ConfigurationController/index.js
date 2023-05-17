import {Component} from 'react'

import './index.css'

export default class ConfigurationController extends Component {
  render() {
    return (
      <div className="bg-main">
        <h1 className="heading">Layout</h1>
        <ul className="list">
          <li className="list-item">
            <input type="checkbox" className="checkbox" id="content" />
            <label htmlFor="content" className="label">
              Content
            </label>
          </li>
          <li className="list-item">
            <input className="checkbox" type="checkbox" id="left-navbar" />
            <label htmlFor="left-navbar" className="label">
              Left Navbar
            </label>
          </li>
          <li className="list-item">
            <input className="checkbox" type="checkbox" id="right-navbar" />
            <label htmlFor="right-navbar" className="label">
              Left Navbar
            </label>
          </li>
        </ul>
      </div>
    )
  }
}
