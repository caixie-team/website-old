import React from 'react'
import styled from '@emotion/styled'
import Heading from './Heading'
import Clients from './Clients'

const HeroTopWrapperOld = styled('div')`
  height: 100vh;
  transform: translate(7vw, 35vh);
  width: calc(100% - 7vw);

  @media (max-width: 1080px) {
    height: auto;
    transform: translate(0, 30vh);
    width: 100%;
  }

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    transform: none;
    text-align: center;
    padding-top: 150px;
  }
`

const HeroTopWrapper = styled('div')`
  height: 100vh;
  transform: translate(0vw, 25vh);
  width: calc(100% - 7vw);

  @media (max-width: 1080px) {
    height: auto;
    transform: translate(0, 20vh);
    width: 100%;
  }

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    transform: none;
    text-align: center;
  }
`

const HeroTop = () => (
    <HeroTopWrapper>
        <Heading />
        <Clients />
    </HeroTopWrapper>
)

export default HeroTop
