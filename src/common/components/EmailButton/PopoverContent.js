import React from 'react'
import { Badge } from 'react-foundation'
import styles from './PopoverContent.scss'

const PopoverContent = () => {
  return(
    <span>
      <h4>Copied!</h4>
      <a href='//mailto:mv8.angelov@gmail.com'>
        <Badge color='success' className={styles.popoverBadge}>
          send mail
        </Badge>
      </a>
    </span>
  )
}

export default PopoverContent
