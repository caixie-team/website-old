import React from 'react'
import styled from '@emotion/styled'

const HeadingWrapper = styled('h1')`
  background-image: linear-gradient(
    78deg,
    #38215d,
    #c8266a 25%,
    #e579ac 47%,
    #8b959c 64%,
    #051f33
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 80px;
  font-weight: 500;
  font-family: ${props => props.theme.fonts.primaryMedium};
  margin: 0;
  background-size: 300% auto;
  max-width: 1200px;
  position: relative;

  background-size: 300% 300%;
  -webkit-animation: Gradient 20s ease infinite;
  -moz-animation: Gradient 20s ease infinite;
  animation: Gradient 20s ease infinite;

  @-webkit-keyframes Gradient {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 300% 100%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  @-moz-keyframes Gradient {
    0% {
      background-position: 0% 100%;
    }
    50% {
      background-position: 300% 50%;
    }
    100% {
      background-position: 0% 100%;
    }
  }

  @keyframes Gradient {
    0% {
      // background-position: 0% 100%;
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 0% 0%;
    }
  }

  @media (max-width: 1080px) {
    max-width: 750px;
    font-size: 68px;
  }

  @media (max-width: ${props => props.theme.screenWidth.large}) {
    max-width: 750px;
    font-size: 60px;
  }

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    max-width: 100%;
    font-size: 32px;
  }

  @media (max-width: 340px) {
    max-width: 100%;
    font-size: 32px;
  }
`

const Heading = () => (
    <HeadingWrapper>采撷创造更有价值的数字产品...</HeadingWrapper>
)

export default Heading
