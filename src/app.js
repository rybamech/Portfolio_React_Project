import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// set material design theme provider
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import injectTapEventPlugin from 'react-tap-event-plugin'

// import reusavble content
import PortfolioButton from './components/PortfolioButton'
import DropDownMenuOpenImmediateExample from './components/PortfolioDropDownMenu'

// inject onTouchTap event
injectTapEventPlugin()

class AppComponent extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
        <PortfolioButton />
        <br />
        <button className={DropDownMenuOpenImmediateExample}><span>Press Key</span></button>
      </MuiThemeProvider>

    )
  }
}

ReactDOM.render(<AppComponent />, document.getElementById('app'))
