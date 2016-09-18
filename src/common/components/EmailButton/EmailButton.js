import React, { Component } from 'react'
import { Badge } from 'react-foundation'
import CopyToClipboard from 'react-copy-to-clipboard'
import styles from './EmailButton.scss'

class EmailButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'mv8.angelov@gmail.com',
    }
  }

  _onHover = () => {
    this.setState({text: 'copy to clipboard'})
  }

  _onOut = () => {
    this.setState({text: 'mv8.angelov@gmail.com'})
  }

  render() {
    return(
        <a href='//mailto:mv8.angelov@gmail.com'>
          <CopyToClipboard text='mv8.angelov@gmail.com' onCopy={console.log('copied')}>
            <Badge color='alert' className={styles.navEmail}
              onMouseOver={this._onHover}
              onMouseOut={this._onOut}
            >
              {this.state.text}
            </Badge>
          </CopyToClipboard>
        </a>
      )
    }


}

export default EmailButton
