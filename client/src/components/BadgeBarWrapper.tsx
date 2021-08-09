import React from 'react'
import BadgeBar from './BadgeBar'
import styled from 'styled-components'

const OverflowOveride = styled.div`
    overflow-y:hidden;
`



const BadgeBarWrapper = () => {
    return (
        <OverflowOveride>
            <BadgeBar icon1="html5" text1="HTML5" icon2="css3-alt" text2="CSS3" icon3="js" text3="Javascript" icon4="react" text4="React" />
            <div className="center">A lot of experience under my belt</div>
            <BadgeBar icon1="java" text1="Java" icon2="git-alt" text2="Git" icon3="php" text3="PHP" icon4="node-js" text4="Node" />
        </OverflowOveride>
    )
}

export default BadgeBarWrapper
