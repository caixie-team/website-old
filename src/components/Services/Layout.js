import React from 'react'
import styled from '@emotion/styled'
import Fade from 'react-reveal/Fade'
import withReveal from 'react-reveal/withReveal'
import { innerWidth } from '../../constants'

const TABLET_BREAKPOINT = 1280

const TwoColumn = styled('div')`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: auto;

  @media (max-width: 1280px) {
    display: block;
    max-width: 700px;
  }
`

const ImageSection = withReveal(
    styled('div')`
    flex-basis: 47%;
  `,
    <Fade
        timeout={1100}
        delay={innerWidth > TABLET_BREAKPOINT ? 200 : 0}
        distance={'100px'}
    />
)

const StrategyImageSection = styled(ImageSection)`
  margin-top: -75px;

  @media (max-width: 1440px) {
    margin-left: -35px;
  }

  @media (max-width: 1280px) {
    max-width: 500px;
    margin: 0 auto;
  }
`

const DesignImageSection = styled(ImageSection)`
  margin-top: -80px;
  margin-left: -70px;

  @media (max-width: 1280px) {
    width: 100%;
    margin: 0 auto;
  }
`

const DevelopmentImageSection = styled(ImageSection)`
  margin-top: -225px;

  @media (max-width: 1280px) {
    margin: auto;
    margin-top: 50px;
    margin-bottom: -200px;
    max-width: 768px;
  }

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    margin-bottom: -120px;
  }
`
const ProductMarketingImageSection = styled(ImageSection)`
  transform: translate(-80px, -130px);

  @media (max-width: 1280px) {
    margin: auto;
    max-width: 768px;
    padding-bottom: 100px;
    transform: none;
  }
`

const TextSection = styled('div')`
  margin-top: 100px;
  flex-basis: 50%;

  @media (max-width: 1280px) {
    margin-top: 40px;
  }
`

const ServicesList = styled('ul')`
  height: 174px;
  font-size: 21px;
  font-weight: 300;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.05;
  letter-spacing: normal;
  color: #ffffff;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    height: auto;
  }
`

const ServiceItem = styled('li')`
  display: inline-block;
  width: 48%;
  float: left;
  margin-top: 14px;
  color: ${props => (props.color ? props.color : '#fff')};
  @media (max-width: ${props => props.theme.screenWidth.small}) {
    display: block;
    float: none;
    width: 100%;
  }
`

const ImageWrapper = styled('img')`
  max-width: 100%;
`

const Fragment = ({ children }) => <>{children}</>
const FadeSectionOne = withReveal(
    Fragment,
    <Fade bottom delay={innerWidth > TABLET_BREAKPOINT ? 600 : 0} />
)
const FadeSectionTwo = withReveal(
    Fragment,
    <Fade bottom delay={innerWidth > TABLET_BREAKPOINT ? 800 : 0} />
)

export {
    TwoColumn,
    StrategyImageSection,
    DesignImageSection,
    DevelopmentImageSection,
    TextSection,
    ServicesList,
    ServiceItem,
    ImageWrapper,
    ProductMarketingImageSection,
    FadeSectionOne,
    FadeSectionTwo,
}
