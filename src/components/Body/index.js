// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Body = () => {
  const LeftNav = showLeft => {
    if (showLeft) {
      return (
        <div className="nav">
          <h2>Left NavBar Menu</h2>
          <p>Item 1</p>
          <p>Item 2</p>
          <p>Item 3</p>
        </div>
      )
    }
    return null
  }

  const Content = content => {
    if (content) {
      return (
        <div className="nav">
          <h2>Content</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
        </div>
      )
    }
    return null
  }

  const RightNav = rightNav => {
    if (rightNav) {
      return (
        <div className="nav">
          <h2>Right NavBar</h2>
          <div className="row">
            <div className="block">
              <p>Ad 1</p>
            </div>
            <div className="block">
              <p>Ad 2</p>
            </div>
          </div>
        </div>
      )
    }
    return null
  }

  return (
    <ConfigurationContext.Consumer>
      {value => {
        const {showLeftNavbar, showRightNavbar, showContent} = value

        return (
          <div className="bg-body">
            {LeftNav(showLeftNavbar)}
            {Content(showContent)}
            {RightNav(showRightNavbar)}
          </div>
        )
      }}
    </ConfigurationContext.Consumer>
  )
}

export default Body
