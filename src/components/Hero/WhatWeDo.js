import React from 'react'
import styled from '@emotion/styled'
import {HeroCTA} from '../Buttons'
import ScrollableAnchor from 'react-scrollable-anchor'
import Fade from 'react-reveal/Fade'

const DescriptionWrapper = styled('div')`
  text-align: center;
  max-width: 689px;
  margin: 0 auto;

  padding-bottom: 100px;

  @media (max-width: 1280px) {
    margin-top: 50px;
  }

  @media (max-width: ${props => props.theme.screenWidth.large}) {
    max-width: 100%;
  }

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    margin-top: 35px;
  }
`

const TitleWrapper = styled('div')`
  text-align: center;
  width: 100%;
`

const PageTitle = styled('h1')`
    position: relative;
    margin-top: 6rem;
    padding-right: 15%;
    z-index: 10;
    font-size: 3.5rem;
    line-height: 1.13;
    text-align: center;
    font-weight: 500;
    width: 100%;
  color: #9b9b9b;
  font-family: ${props => props.theme.fonts.primaryMedium};
  font-size: 55px;
  font-weight: 500;
  line-height: 1.25;
  text-align: center;
  background-image: linear-gradient(
    78deg,
    #c772a3,
    #4c5465 28%,
    #3e5362 49%,
    #2092c4
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    font-size: 32px;
  }
`

const SubTitle = styled('h2')`
  color: #fff;
  margin: 0 auto;
  height: 72px;
  max-width: 577px;
  color: #ffffff;
  font-family: ${props => props.theme.fonts.secondary};
  font-size: 30px;
  font-weight: 200;
  line-height: 36px;

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    font-size: 28px;
    line-height: 30px;
  }
`

const DescriptionInnerWrapper = styled('p')`
  /*font-family: ${props => props.theme.fonts.secondary};*/
  font-family: 'Noto Serif SC';
  font-size: 44px;
  font-weight: 600;
  line-height: 1.27;
  text-align: center;
  color: #ffffff;

  @media only screen and (max-device-width: 850px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    font-size: 30px;
  }

  @media (max-width: ${props => props.theme.screenWidth.large}) {
    margin: 0;
  }

  @media (max-width: ${props => props.theme.screenWidth.small}) {
    margin: 0;
    font-size: 26px;
  }
`

const ButtonWrapper = styled('div')`
  margin-top: 80px;

  @media (min-width: 1080px) {
    display: none;
  }
`
const ServicesLinkWrapper = styled('div')`
  display: flex;
  text-align: center;
  justify-content: center;
  padding-bottom: 42px;

  @media (max-width: 1080px) {
    padding-top: 150px;
  }

  @media only screen and (max-device-width: 850px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    padding-top: 50px;
  }

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    padding-top: 0;
    padding-bottom: 27px;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
`

const ServiceLink = styled('a')`
  font-size: 18px;
  line-height: 1.25;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-family: ${props => props.theme.fonts.sourceCode};
  text-decoration: none;
  margin: 0 20px;
  color: ${props => props.color};

  &:hover {
    outline: none;
  }

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    display: block;
    font-size: 14px;
    width: 50%;
    margin: 10px 0 17px;
    padding: 0 20px;
  }
`

const Section = styled('section')`
  // height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    height: auto;
  }
`

const services = [
    {
        name: '策略',
        // name: 'Strategy',
        color: '#A5C93D',
        href: '#strategy',
    },
    {
        name: '设计',
        // name: 'Design',
        color: '#FF003B',
        href: '#design',
    },
    {
        name: '工程',
        // name: 'Engineering',
        color: '#009BEC',
        href: '#engineering',
    },
    // {
    // name: 'Marketing',
    // name: '营销',
    // color: '#DEAC54',
    // href: '#marketing',
    // },
]

export default () => (
    <ScrollableAnchor id={'whatwedo'}>
        <Section>
            <DescriptionWrapper>
                <Fade bottom distance={'100px'}>
                    <DescriptionInnerWrapper>
                    <PageTitle>
                        我们构建高价值产品的秘方
                    </PageTitle>
                    <SubTitle/>
                    </DescriptionInnerWrapper>
                </Fade>
                <ButtonWrapper>
                    <HeroCTA
                        style={{
                            margin: 0,
                        }}
                    />
                </ButtonWrapper>
            </DescriptionWrapper>

            <ServicesLinkWrapper>
                {services.map((item, index) => (
                    <Fade key={index} bottom distance={'30px'} delay={index * 100}>
                        <ServiceLink key={index} href={item.href} color={item.color}>
                            {item.name}
                        </ServiceLink>
                    </Fade>
                ))}
            </ServicesLinkWrapper>
        </Section>
    </ScrollableAnchor>
)
