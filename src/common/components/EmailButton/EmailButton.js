import React, { Component } from 'react'
import { Badge } from 'react-foundation'
import CopyToClipboard from 'react-copy-to-clipboard'
import Popover from 'react-popover'
import styles from './EmailButton.scss'
import PopoverContent from './PopoverContent'

class EmailButton extends Component {
  constructor(props) {
    super(props)

    this.state = {
      text: 'mv8.angelov@gmail.com',
      popoverOpen: false,
    }
  }

  _onHover = () => {
    this.setState({text: 'copy to clipboard'})
  }
  _onOut = () => {
    this.setState({text: 'mv8.angelov@gmail.com'})
  }
  _onClick = () => {
    this.setState({popoverOpen: !this.state.popoverOpen})
  }

  render() {
    return(
        <a href='#' onClick={(e) => {e.preventDefault()}}>
          <Popover isOpen={this.state.popoverOpen} body={<PopoverContent />} onOuterAction={this._onClick} preferPlace='below'>
            <CopyToClipboard text='mv8.angelov@gmail.com'>
              <Badge color='alert' className={styles.navEmail}
                onMouseOver={this._onHover}
                onMouseOut={this._onOut}
                onClick={this._onClick}
              >
                {this.state.text}
              </Badge>
            </CopyToClipboard>
          </Popover>
        </a>
      )
    }


}

export default EmailButton
