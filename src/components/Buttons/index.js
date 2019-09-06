import styled from '@emotion/styled'
import React from 'react'
import { Link } from 'gatsby'

export const CTA = styled(Link)`
  display: inline-block;
  min-width: ${props => (props.minWidth ? props.minWidth : '146px')};
  height: ${props => (props.height ? props.height : '49px')};
  line-height: ${props => (props.height ? props.height : '49px')};
  vertical-align: middle;
  font-size: ${props => (props.fontSize ? props.fontSize : '18px')};
  font-family: ${props => props.theme.fonts.primaryRegular};
  text-align: center;
  color: #fff;
  margin-left: 2px;
  margin-top: ${props => (props.marginTop ? props.marginTop : '0px')};
  border-radius: 24.5px;
  border-width: 0px;
  border-style: solid;
  cursor: pointer;
  font-weight: 100;
  text-decoration: none;
  position: relative;
  background: linear-gradient(to right, #601947, #315567);
  overflow: hidden;
  z-index: 1;
  outline: none;
  cursor: pointer;

  &:hover {
    &::before {
      transform: translate(0, -60px);
    }
  }

  &::before {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    height: 160px;
    width: 104%;
    transform: translate(-100%, 0);
    transition: 0.4s all ease;
    background: linear-gradient(to left, #315567, #601947);
    border-radius: 50%;
    z-index: 1;
  }

  &::after {
    content: ' ';
    position: absolute;
    top: ${props => (props.gradientTop ? props.gradientTop : '2px')};
    left: 2px;
    height: ${props => (props.gradientHeight ? props.gradientHeight : '92%')};
    width: ${props => (props.gradientWidth ? props.gradientWidth : '97%')};
    background: black;
    z-index: 0;
    border-radius: ${props =>
    props.gradientRadius ? props.gradientRadius : '24.5px'};
  }
  @media (max-width: ${props => props.theme.screenWidth.small}) {
    width: ${props => (props.mobileFullWidth ? '100%' : 'auto')};
  }
`
export const Span = styled('span')`
  position: relative;
  z-index: 1;
`

export const HeroCTA = style => (
    <CTA to="/contact" {...style}>
        <Span>Get in touch</Span>
    </CTA>
)
