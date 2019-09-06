import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'gatsby'

const CTA = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 146px;
  height: 50px;
  line-height: 50px;
  border: 1px solid #fff;
  border-radius: 25px;
  position: relative;
  cursor: pointer;
  transition: 0.4s all ease;
  overflow: hidden;
  text-decoration: none;
  @media (max-width: ${props => props.theme.screenWidth.small}) {
    width: 138px;
    height: 39px;
  }

  span {
    font-family: ${props => props.theme.fonts.primaryRegular};
    font-size: 18px;
    color: #fff;
    z-index: 1;
    transition: 0.4s all ease;
  }
  &:hover {
    span {
      color: #000;
    }
    &::before {
      top: -27px;
      left: -31px;
    }
  }

  &::before {
    content: '';
    width: 186px;
    height: 119px;
    border-radius: 100%;
    background-color: #fff;
    position: absolute;
    top: 0px;
    left: -177px;
    transition: 0.4s all ease;
  }
`
const whiteCTA = style => (
    <CTA to="/contact" {...style}>
        <span>Get in touch</span>
    </CTA>
)

export default whiteCTA
