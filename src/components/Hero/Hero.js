
import React from 'react'
import styled from '@emotion/styled'
import HeroTop from './HeroTop'
import { anchors } from '../../constants'

const HeroWrapper = styled('div')`
  min-height: 840px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1280px) {
    min-height: 700px;
  }

  @media screen and (max-width: ${props => props.theme.screenWidth.small}) {
    min-height: 1px;
  }
`

const Mouse = styled('a')`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  width: 23px;
  text-decoration: none;

  .mouse_scroll_btn {
    @media (max-width: 1280px) {
      display: none;
    }
    @media all and (max-height: 680px) {
      display: none;
    }
    p {
      color: #fff;
      font-size: 12px;
      position: relative;
      left: -5px;
    }
    .mousey {
      width: 23px;
      padding: 0;
      height: 39px;
      border: 2px solid #fff;
      border-radius: 30px;
      opacity: 0.75;
      margin: 0 0 7px;
    }
    .scroller {
      width: 3px;
      height: 6px;
      border-radius: 50%;
      background-color: #fff;
      animation-name: scroll;
      animation-duration: 1.5s;
      animation-timing-function: cubic-bezier(0.15, 0.41, 0.69, 0.94);
      animation-iteration-count: infinite;
      margin-left: 8px;
      margin-top: 7px;
    }
    @keyframes scroll {
      0% {
        opacity: 0;
      }
      10% {
        transform: translateY(0);
        opacity: 1;
      }
      100% {
        transform: translateY(15px);
        opacity: 0;
      }
    }
  }
`
const Hero = () => (
    <HeroWrapper>
        <HeroTop />
        <Mouse href={`#${anchors.whatwedo}`} aria-label="Scroll down">
            <div className="mouse_scroll_btn">
                <div className="scroll-downs">
                    <div className="mousey">
                        <div className="scroller" />
                    </div>
                </div>
            </div>
        </Mouse>
    </HeroWrapper>
)

export default Hero
