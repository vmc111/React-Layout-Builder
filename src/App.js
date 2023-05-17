import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'

import './App.css'
import ConfigurationContext from './context/ConfigurationContext'

class App extends Component {
  state = {
    showLeftNav: true,
    showContent: true,
    showRightNav: true,
  }

  onToogleLeftNav = () =>
    this.setState(preState => ({
      showLeftNav: !preState.showLeftNav,
    }))

  onToogleContent = () =>
    this.setState(preState => ({
      showContent: !preState.showContent,
    }))

  onToogleRightNav = () =>
    this.setState(preState => ({
      showRightNav: !preState.showRightNav,
    }))

  render() {
    const {showLeftNav, showContent, showRightNav} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar: showLeftNav,
          showRightNavbar: showRightNav,
          onToggleShowContent: this.onToggleContent,
          onToggleShowLeftNavbar: this.onToogleLeftNav,
          onToggleShowRightNavbar: this.onToogleRightNav,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
