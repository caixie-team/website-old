import React from 'react'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'
import { innerWidth } from '../constants'

const Title = withReveal(
    styled('h2')`
    position: relative;
    z-index: 1;
    // font-size: 80px;
    // font-weight: 500;
    // font-stretch: normal;
    // line-height: normal;
    letter-spacing: normal;
    text-align: center;
    // color: ${props => (props.color ? props.color : props.theme.colors.brown)};
    // font-family: ${props => props.theme.fonts.primaryMedium};
    font-family: 'Noto Serif SC'
    @media (max-width: ${props => props.theme.screenWidth.small}) {
      // font-size: 40px;
    }
  `,
    <Fade bottom delay={innerWidth > 1280 ? 400 : 0} />
)

const LargeParagraph = styled('p')`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 18px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: ${props => (props.color ? props.color : '#ffffff')};

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    font-size: 16px;
  }
`

const SmallHeading = styled('h3')`
  font-family: ${props => props.theme.fonts.primaryMedium};
  font-size: 28px;
  font-weight: 500;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.625;
  color: #fff;
`

const ServiceHeadingMedium = styled('h3')`
  font-family: ${props => props.theme.fonts.sourceCode};
  font-size: 24px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  // line-height: 1.42;
  line-height: 1.625;
  letter-spacing: 1.3px;
  color: ${props => (props.color ? props.color : '#ffffff')};
  text-transform: uppercase;

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    font-size: 15px;
  }
`

const ServiceHeadingSmall = styled(SmallHeading)`
  line-height: normal;
  letter-spacing: normal;
  // color: ${props => (props.color ? props.color : props.theme.colors.brown)};
  margin: 0;
  margin-top: 80px;
  margin-bottom: 14px;

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    font-size: 26px;
    margin-top: 29px;
  }
`

const TeamParagraph = styled('p')`
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 20px;
  line-height: 1.39;
  letter-spacing: normal;
  color: #fff;

  @media (max-width: 1280px) {
    margin-bottom: 20px;
  }
`

export {
    Title,
    LargeParagraph,
    ServiceHeadingMedium,
    ServiceHeadingSmall,
    TeamParagraph,
    SmallHeading,
}
