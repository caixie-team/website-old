import styled from '@emotion/styled'

export default styled('section')`
  padding: 144px 5%;
  // padding-top: 50px;
  width: 100%;
/*  background: ${props =>
    props.background ? props.background : props.theme.colors.red};*/
  background-position: center center;

  @media (max-width: 1280px) {
    padding: 100px 5%;
  }

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
/*    background: ${props =>
    props.mobileBackground ? props.mobileBackground : props.background};*/
    padding: 55px 30px;
  }
`
