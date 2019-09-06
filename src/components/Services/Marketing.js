import React from 'react'
import styled from '@emotion/styled'
import ScrollableAnchor from 'react-scrollable-anchor'
import ProductMarketingImage from '../../images/product-marketing-graphics-desktop.svg'
import ProductMarketingImageMobile from '../../images/product-marketing-graphics-tablet.svg'
import MarketingBackground from '../../images/product-marketing-bg-desktop.svg'
import MarketingBackgroundMobile from '../../images/product-marketing-bg-tablet.svg'

import {
    Title as BaseTitle,
    ServiceHeadingMedium,
    ServiceHeadingSmall,
    LargeParagraph,
} from '../Text'

import {
    TwoColumn,
    ProductMarketingImageSection,
    TextSection as BaseTextSection,
    ServicesList,
    ServiceItem,
    ImageWrapper,
    FadeSectionOne,
    FadeSectionTwo,
} from './Layout'
import { anchors } from '../../constants'

const services = [
    'Branding',
    'Lead Generation',
    'Content Planning',
    'Search Engine Optimization',
    'Conversion Rate Optimization',
    'Market Research',
    'Product Research',
    'Market Funneling',
    'Traffic Analysis',
    'Competitive Analysis',
]

const Background = styled('section')`
  width: 100%;
/*  background: ${props =>
    props.background ? props.background : props.theme.colors.red};*/
  background-size: cover;
  background-position: center center;
  padding: 144px 0;

  @media (max-width: 1440px) {
    padding: 100px 0;
  }

  @media (max-width: 1280px) {
    padding: 50px 0;
  }
`

const MarketingTwoColumn = styled(TwoColumn)`
  padding: 0 5%;
  @media (max-width: 1280px) {
    padding: 0;
    max-width: initial;
  }
`

const ImageBackground = styled('div')`
  @media (max-width: 1280px) {
    background: url(${MarketingBackgroundMobile});
    background-size: cover;
    z-index: 1;
  }
`

const DesktopTitle = styled(BaseTitle)`
  @media (max-width: 1280px) {
    display: none;
  }
`

const MobileTitle = styled(BaseTitle)`
  display: none;
  @media (max-width: 1280px) {
    display: block;
  }
  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    margin-bottom: 50px;
  }
`

const TextSection = styled(BaseTextSection)`
  @media (max-width: 1280px) {
    padding: 0;
    margin-top: 45px;
  }

  @media (max-width: 1280px) {
    display: block;
    max-width: 700px;
    margin: auto;
  }

  @media (max-width: ${props => props.theme.screenWidth.medium}) {
    padding: 30px 30px;
  }
`

const primaryColor = '#000'
const textColor = '#000'

const Design = () => (
    <ScrollableAnchor id={anchors.marketing}>
        <Background
            background={`url(${MarketingBackground}), #fff`}
            style={{
                bacgkroundSize: 'contain',
            }}
        >
            <DesktopTitle color={primaryColor}>
                product <br /> marketing
            </DesktopTitle>
            <MarketingTwoColumn>
                <ImageBackground>
                    <MobileTitle color={primaryColor}>
                        product <br /> marketing
                    </MobileTitle>
                    <ProductMarketingImageSection>
                        <picture>
                            <source
                                srcSet={`${ProductMarketingImageMobile}`}
                                media="(max-width: 1280px)"
                            />
                            <ImageWrapper src={ProductMarketingImage} alt="" />
                        </picture>
                    </ProductMarketingImageSection>
                </ImageBackground>
                <TextSection>
                    <FadeSectionOne>
                        <ServiceHeadingMedium color={textColor}>
                            Find out how to communicate and succeed with your audience.
                        </ServiceHeadingMedium>
                        <LargeParagraph color={textColor}>
                            Our team conducts research and tests distribution channels for
                            your product. We utilize a data-driven and conversion based
                            optimization approach when it comes to planning, executing and
                            iterating on your marketing campaigns. We will identify the right
                            platforms, tactics, and technologies in order to deliver on your
                            objectives and success criteria.
                        </LargeParagraph>
                    </FadeSectionOne>
                    <FadeSectionTwo>
                        <ServiceHeadingSmall color={primaryColor}>
                            services
                        </ServiceHeadingSmall>
                        <ServicesList>
                            {services.map((item, index) => {
                                return (
                                    <ServiceItem color={textColor} key={index}>
                                        {item}
                                    </ServiceItem>
                                )
                            })}
                        </ServicesList>
                    </FadeSectionTwo>
                </TextSection>
            </MarketingTwoColumn>
        </Background>
    </ScrollableAnchor>
)

export default Design
