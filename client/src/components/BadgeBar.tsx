import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const BadgeBar = ({icon1,icon2,icon3,icon4,text1,text2,text3,text4}) => {
    return (
        <div className="grid">
      <div className="grid-item">
        <FontAwesomeIcon icon={["fab", `${icon1}` as any]} size="8x" />
        <div>{text1}</div>
      </div>
      <div className="grid-item">
        <FontAwesomeIcon icon={["fab", `${icon2}` as any]} size="8x" />
        <div>{text2}</div>
      </div>
      <div className="grid-item">
        <FontAwesomeIcon icon={["fab", `${icon3}` as any]} size="8x" />
        <div>{text3}</div>
      </div>
      <div className="grid-item">
        <FontAwesomeIcon icon={["fab", `${icon4}` as any]} size="8x" />
        <div>{text4}</div>
      </div>
      
      
    </div>
    )
}

export default BadgeBar
